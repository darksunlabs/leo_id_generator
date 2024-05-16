# Leo ID Generator

Leo doesn't have a string type so it can sometimes be difficult to generate IDs such as transaction IDs that reflect the sender and the receiver and the timestamp of the operation. This code snippet is one way to resolve this issue by converting these details into a Leo Field form, that can be readily used in Aleo Smart Contracts.

This method does not use ALL of the letters in the respective addresses, because of Leo Field limits, but takes a sequence of them from the sender and recipient addresses. For a repeat ID to be generated:  
1. Two sender wallets would need the same sequence of 17 letters
2. Two recipient wallets would need the same sequence of 17 letters
3. The two transactions would need to happen at the exact some timestamp
4. The transaction count of the two sender wallets would need to be the same  
Assuming the latter two conditions are met (black swan event), the probability of the first two conditions being met is still only < 1.222 * 10^(-53)

Hence, we expect this algorithm to work out even after millions of Aleo wallets are in use for millions of transactions every hour.