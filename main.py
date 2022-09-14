import random as r

arr = [1432, 3249, 1242, 4211]

result = 0

while (True):
    result += 1
    m = 0
    m1 = 0

    for i in range(len(arr)):
        if m < str(arr[i]).count('1'):
            m = str(arr[i]).count('1')
            m1 = i

    b = arr[m1]
    arr = []
    arr.append(b)
    for i in range(3):
        a = list(str(b))
        a[r.randint(0, 3)] = str(r.randint(1, 9))
        arr.append(int(''.join(a)))
    print(arr)
    
    for i in range(4):
        if arr[i] == 1111:
            print('<*END*>')
            print(result)
            exit()