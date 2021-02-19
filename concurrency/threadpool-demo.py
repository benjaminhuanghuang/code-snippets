from concurrent.futures import ThreadPoolExecutor
import time


def looooong_task(i):
    print("task %s running" % i)
    time.sleep(10)
    print("task %s done..." % i)


with ThreadPoolExecutor(max_workers=3) as excutor:
  for i in range(20):
    excutor.submit(looooong_task, i)
