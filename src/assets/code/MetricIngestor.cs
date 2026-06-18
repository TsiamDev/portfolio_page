using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace DiagnosticsEngine.Telemetry
{
    public interface IMetric { string Token { get; } bool IsVerified { get; } }

    public class MetricIngestor<TMetric> where TMetric : class, IMetric
    {
        private readonly ConcurrentDictionary<string, byte> _uniquenessRegistry = new();
        private long _successfullyIngestedCount;

        public event EventHandler<string> IngestionCompleted;

        public async Task<bool> IngestDataPointAsync(TMetric metric, CancellationToken cancellationToken = default)
        {
            if (metric == null || !metric.IsVerified)
            {
                throw new ArgumentException("Invalid transaction metrics data passed.", nameof(metric));
            }

            // Attempt thread-safe deduplication
            if (!_uniquenessRegistry.TryAdd(metric.Token, 0))
            {
                return false;
            }

            try
            {
                cancellationToken.ThrowIfCancellationRequested();

                // Simulate intensive asynchronous pipeline validation
                await Task.Delay(150, cancellationToken).ConfigureAwait(false);

                Interlocked.Increment(ref _successfullyIngestedCount);

                OnIngestionCompleted(metric.Token);
                return true;
            }
            catch (Exception ex) when (ex is not OperationCanceledException)
            {
                _uniquenessRegistry.TryRemove(metric.Token, out _);
                // SystemDiagnostics.LogError(ex);
                throw;
            }
        }

        protected virtual void OnIngestionCompleted(string token)
        {
            IngestionCompleted?.Invoke(this, token);
        }
    }
}