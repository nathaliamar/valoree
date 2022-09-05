$('.tbl_row_text:contains("Username")').next().children("input").val(u);
$('.tbl_row_text:contains("Password")').next().children("input").val(p);
$('input[type="submit"]').focus();
