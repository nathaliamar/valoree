newsTitle1 = "School Financial Plan Available Now";
newsSummary1 = "Financial Plan has been released for this year.";
newsImage1 = "/Common/resources/DesignPortfolio/SiteThemes/CommonLib/news/financial-plan.jpg";
NewsHtml1 = "We have released our Financial Plan for this year. Members of the County are free to review this public document and attend a public meeting with a date TBD.";

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