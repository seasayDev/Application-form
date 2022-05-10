/**
  * Allows you to check if a character string matches
  * to a given regular expression.
  * @param value: the value to check.
  * @param element: element that contains the value.
  * @param regexp: the regex library.
  */

 $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Check your entry."
  );

/**
  * Used to validate the fields on the application page.
  * @rules: verification rules.
  * @messages: message to display.
  */

 $(document).ready(function () {
    $("#registration").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        name: {
          required: true,
          regex: /^[A-Za-z]+/, /*ex: camille or KENDJI*/
        },
        email: {
          required: true,
          email: true,
        },
        zipCode: {
          regex: /^(\s)?[A-Za-z][0-9][A-Za-z](\s)+[0-9][A-Za-z][0-9](\s)?$/, /*ex: H8R 2Z2 or h8r 2z2*/
        },
        address: {
          regex: /^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9\s_-]+)$/g,    /*ex: 1033  peace road*/ 
        },
        job: "required",
        profilePicture: {
          required: true,
        },
        fileCV: {
          required: true,
          regex: / *(.pdf)$/,
        },
      },
      messages: {
        name: {
          required: "The name is required",
          regex: "The format is invalid",
        },
        zipCode: {
          regex: "The zip code is invalid",
        },
        address: "The address entered is invalid",
        profilPicture: {
          required: "Insert a picture",
        },
        fileCV: {
          required: "insert your CV",
          regex: "Inserer only pdf!",
        },
        email: "Insert a valid email address!",
        job: "Please enter a valid position",
      },
    });
  });
  