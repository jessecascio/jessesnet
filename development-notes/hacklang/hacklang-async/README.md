jessesnet
=========

### Hacklang Async Example

This is an example use case of using Hack async.  The script makes a curl request to various different web sites, and "does work" on the responses.  There are two different scripts that can be run, async.hh and sync.hh.  Both scripts use PHP's curl_multi and batches the URLs in groups of 3s, so 3 concurrent URLs via the curl_multi handlers.  The sync makes the call (for 3 URLs), waits until they are completed, processes the data (random micro second sleep), then continues to the next batch.  The async makes all the curl_multi calls in parallel and processes the results as the batches finish.  The async is much more efficient, and uses relatively the same amount of memory as the sync script.
