# Genetic Algorithm (유전 알고리즘)
유전 알고리즘 구현하기
<iframe width="560" height="315" src="https://www.youtube.com/embed/RJ7jgCc2RCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 설명
술래(Taggers)들이 먹이(Feed)를 먹으면서 가장 많이 먹은 상위 10%만 살아남는다.
살아남은 술래들끼리 교배를 하여 자신의 형질(유전자)를 유전시킨다.
이 과정을 반복하여 가장 효율적으로 먹이를 먹는 술래의 유전자를 찾아낸다.

## 가설
아주 크고, 가로 속도가 빠르고 세로 속도가 느리거나, 가로 속도가 느리거나 세로 속도가 빠른 것들이 살아남을 것이다.

## 초기화
### 술래(Taggers)
- 술래 개수 = 40
- 술래 가로 속도 = 0~5
- 술래 세로 속도 = 0~5
- 술래 가로 길이 = 0~30
- 술래 세로 길이 = 0~30

### 먹이(Feeds)
- 먹이 개수 = 30

## 유전자
- 가로 속도 (SpeedX)
- 세로 속도 (SpeedY)
- 가로 길이 (Width)
- 세로 길이 (Height)