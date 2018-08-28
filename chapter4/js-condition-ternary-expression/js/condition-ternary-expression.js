// -----------------------------------------------------------
// 조건(3항) 연산자 ? :
// Condition Ternary Expression
//
// var 변수 = if (조건) { 값1 } else { 값2 }  [X]
// var 변수 = 조건 ? 값1 : 값2                [O]
//
// -----------------------------------------------------------


// 실습 1
function getYear(format) {
  var date = new Date();
  var year = date.getFullYear();
  format = !format ? '' : format;
  return year + format;
}


// 실습 2

function getHours(format, ampm) {
  var hour = Number( (new Date()).getHours());
  format = !format ? '' : format;
  ampm = !ampm ? '' : hour<12 ? 'AM' : 'PM';
  hour = 12-hour>3 ? '0' + hour + ampm + format : hour + ampm + format;
  return hour;
}

function getHours(format, ampm) {
  var hour = Number((new Date()).getHours());
  // format이 없을 경우 조건 참
  if (!format) {
    format = '';
  }
  // ampm 전달인자 값이 참일 경우
  if (ampm) {
    // hour 값이 12보다 작을 경우는
    // 'AM' : 0시 ~ 11시 59분
    if (hour < 12) {
      ampm = 'AM ';
      if (12 - hour > 3) { // 9 이하의 수
        hour = '0' + hour; // '09'
      }
    }
    // hour 값이 12 이상일 경우는
    // 'PM' : 12시 ~ 23시 59분
    else {
      ampm = 'PM ';
      hour = hour - 12;
    }
  }
  // ampm 전달인자 값이 거짓일 경우
  else {
    ampm = '';
  }
  // 결과 반환
  return ampm + hour + format;
}



// -----------------------------------------------------------
// 논리곱(&&), 논리합(||) 연산자를 활용한 조건 식 처리
// -----------------------------------------------------------

// 실습 3
function el(selector, context) {
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  if (context && context.nodeType !== document.ELEMENT_NODE) { context = el(String(context)); }
  if (!context) { context = document; }
  return context.querySelector(selector);
}
