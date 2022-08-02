newsTitle1 = "New 1 on 1 Tutor Program";
newsSummary1 = "Our School is proud to announce a new 1 to 1 tutoring program! The program is designed to provide students with after-hours tutoring in order to help clear up areas of confusion and refine their knowledge base.";
newsImage1 = "/Common/resources/DesignPortfolio/SiteThemes/CommonLib/news/family-meeting.jpg";
NewsHtml1 = "CUHSD is proud to announce a new 1 to 1 tutoring program! The program is designed to provide students with after-hours tutoring in order to help clear up areas of confusion and refine their knowledge base. Tutoring is offered, at no extra cost, for many subjects including: English, Math, and Geography. If you are interested in finding out more information regarding the program, or would wish to enlist you child for a specific subject, please contact our main office at 1-739-737-3373.";

$('.add-new-page-modal-form-title').children('input').val(newsTitle1).trigger("change");

$('.tbl_row_text:contains("Title")').next().children("input").val(newsTitle1);
$('label:contains("Summary")').parent("td").next().children("textarea").val(newsSummary1);
$('.tbl_row_text:contains("Summary")').next().children("input").val(newsSummary1);
$('.tbl_row_text:contains("Featured Image")').each(function(){
	$(this).next().children("input").first().val(newsImage1);
});

$('label:contains("Summary")').parent("td").next().children("textarea").val(newsSummary1);
$('table .reMode_html').parent().trigger("click");
$('.reContentCell textarea.reTextArea').val(NewsHtml1);