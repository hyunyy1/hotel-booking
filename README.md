# 🏨 hotel-booking

## demo
🌟 [여기](https://hotelbooking-hyunseo.netlify.app/login/) 에서 사용해볼 수 있습니다.


## project
- `React Query`를 이용해 `Supabase`에 저장된 데이터를 가져와 실시간으로 변하는(체크인, 체크아웃) 호텔 예약 정보를 보여줌
- `Styled Components`를 이용하였고, 라이트 / 다크모드 구현함
- `Supabase`의 사용자 인증과 권한부여를 통해 로그인에 성공한 사람만 사이트에 접근 가능하게 함
- `Compound Components`를 이용해서 reusable하게 만듬
- UI State관리를 위해 `context API` 사용함
- booking과 cabin 필터링과 정렬을 위해 search 파라미터를 사용함
- 체크인 시 총 가격을 지불 했는 지 사전에 체크함 ( 조식비용을 추가할 수 있음 ) 
- `react-hook-form`을 이용해 form을 효율적으로 처리함
- `react-hot-toast`를 이용해 성공, 수정, 삭제 시 알림을 시각적으로 구현함
- `recharts`를 이용해 호텔 예약 정보를 시각화하여 차트로 보여줌 ( 기간별 총 가격, 체류 기간 등 )
- 왼쪽 하단의 sample data upload 버튼을 눌러 데이터를 처음 상태로 세팅할 수 있음


####  db 테이블
![image](https://github.com/hyunyy1/hotel-booking/assets/79568825/1914469b-242c-40d9-a0df-6170081df9c7)


## start
```
git clone https://github.com/hyunyy1/hotel-booking.git

npm install
```
