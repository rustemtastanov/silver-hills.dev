$().ready(function() {

  $(document).off("submit", FORMIT["formSelector"]).on("submit", FORMIT["formSelector"], function(e) {
    $(this).ajaxSubmit({
      dataType: "json",
      data: {
        pageId: FORMIT["pageId"]
      },
      url: FORMIT["actionUrl"],
      beforeSerialize: function(form) {
        form.find(":submit").each(function() {
          if (!form.find("input[type=\"hidden\"][name="+ $(this).attr("name") +"]")["length"]) {
            $(form).append(
              $("<input type=\"hidden\">").attr({
                name: $(this).attr("name"),
                value: $(this).attr("value")
              })
            );
          }
        })
      },
      beforeSubmit: function(fields, form) {
        if (typeof(afValidated)!="undefined" && afValidated==false || typeof form[0].dataset.error!="undefined") {
          return false;
        }
        return true;
      },
      success: function(response, status, xhr, form) {
        response["form"] = form;
        $(document).trigger("af_complete", response);
        if (!response["success"]) {
          if (response["data"]) {
            var key, value, focused;
            for (key in response["data"]) {
              if (response["data"].hasOwnProperty(key)) {
                if (!focused) {
                  form.find("[name=" + key + "]").focus();
                  focused = true;
                }
                value = response["data"][key];
              }
            }
          }
        }
        else form[0].reset();
      }
    });
    e.preventDefault();
    return false;
  });

});