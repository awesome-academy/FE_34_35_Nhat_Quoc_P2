import React from "react";

const Register = () => {
  return(
    <div class="register">
      <div class="register__wrap">
        <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
        <div class="register__inner">
          <div class="register__name">REGISTER</div>
          <form class="register__form">
            <input placeholder="Full name" type="text" />
            <input placeholder="Phone" type="text" />
            <input placeholder="Name" type="text" />
            <input placeholder="Password" type="text" />
            <input placeholder="Re-Password" type="text" />
            <input placeholder="Address" type="text" />
            <div class="register__text-confirm-signup">
              Tôi đã đọc và đồng ý với <a href="#">CHÍNH SÁCH</a> của chương trình.
            </div>
            <button class="register__button--submit">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;