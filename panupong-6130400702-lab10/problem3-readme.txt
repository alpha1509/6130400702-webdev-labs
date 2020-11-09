--------------------------------------------------- Instructions-----------------------------------------------------------------------
ในการนำ Email Validator API นี้ไปใช้งานนั้นจำเป็นต้องติดตั้ง module ที่ชื่อว่า "unirest" ด้วยคำสั่ง npm install --save unirest
จากนั้นสามารถใช้งานได้จากการ run node บนไฟล์ที่ชื่อว่า p3-sol.js
โดยภายในไฟล์ p3-sol.js สามารถแก้ไขตัวแปรที่ชื่อว่า emails ซึ่งเก็บค่าเป็น Array ด้วยการเพิ่มอีเมลที่เราต้องการตรวจสอบความถูกต้อง หรือมีอยู่จริงของโดเมนอีเมล 
ซึ่งเมื่อทำการ run จะได้ผลลัพธ์ออกมาทาง console โดยจะบอกข้อมูลคร่าว ๆ ของอีเมลนั้น ๆ
เช่น email: panupong.chimmai@kkumail.com จะได้ผลลัพธ์เป็น

{
  address: 'panupong.chimmai@kkumail.com',
  status: 'valid',
  sub_status: '',
  free_email: false,
  did_you_mean: null,
  account: 'panupong.chimmai',
  domain: 'kkumail.com',
  domain_age_days: '5005',
  smtp_provider: 'g-suite',
  mx_found: 'true',
  mx_record: 'aspmx.l.google.com',
  firstname: null,
  lastname: null,
  gender: null,
  country: null,
  region: null,
  city: null,
  zipcode: null,
  processed_at: '2020-11-09 06:24:52.531'
}

ซึ่งเราจะนำข้อมูลในส่วนของ status มาใช้ เพื่อบอกว่าอีเมลนี้มีโดเมนถูกต้องหรือไม่

--------------------------------------------------------------------------------------------------------------------------------------------