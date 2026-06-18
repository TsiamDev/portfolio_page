using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace CommerceEngine.Core
{
    public interface IOrder { string Id { get; } bool IsValid { get; } }

    public class OrderProcessor<TOrder> where TOrder : class, IOrder
    {
        private readonly ConcurrentDictionary<string, byte> _deduplicationCache = new();
        private long _successfullyProcessedCount;

        public event EventHandler<string> ProcessCompleted;

        public async Task<bool> ProcessTransactionAsync(TOrder order, CancellationToken cancellationToken = default)
        {
            if (order == null || !order.IsValid)
            {
                throw new ArgumentException("Invalid transaction metrics data passed.", nameof(order));
            }

            // Attempt thread-safe deduplication
            if (!_deduplicationCache.TryAdd(order.Id, 0))
            {
                return false;
            }

            try
            {
                cancellationToken.ThrowIfCancellationRequested();

                // Simulate intensive asynchronous pipeline validation
                await Task.Delay(150, cancellationToken).ConfigureAwait(false);

                Interlocked.Increment(ref _successfullyProcessedCount);

                OnProcessCompleted(order.Id);
                return true;
            }
            catch (Exception ex) when (ex is not OperationCanceledException)
            {
                _deduplicationCache.TryRemove(order.Id, out _);
                // SystemDiagnostics.LogError(ex);
                throw;
            }
        }

        protected virtual void OnProcessCompleted(string orderId)
        {
            ProcessCompleted?.Invoke(this, orderId);
        }
    }
}