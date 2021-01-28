
import random

def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]


nums = [random.uniform(1, 10) for i in range(10)]


nums_groups = list(chunks(nums, 4))


print(nums_groups)