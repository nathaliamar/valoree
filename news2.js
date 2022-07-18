newsTitle1 = "Welcome Dr. Waltz";
newsSummary1 = "We are pleased to welcome Dr. Waltz";
newsImage1 = "/Common/resources/DesignPortfolio/SiteThemes/CommonLib/news/new-program.jpg";
NewsHtml1 = "We are pleased to welcome Dr. Waltz as the new Head of the Faculty of Sciences. Dr. Waltz is a former young member of the Space X project and is sure to bring a world of experience to our Faculty of Sciences.";

$('.add-new-page-modal-form-title').children('input').val(newsTitle1).trigger("change");

$('.tbl_row_text:contains("Title")').next().children("input").val(newsTitle1);
$('label:contains("Summary")').parent("td").next().children("textarea").val(newsSummary1);
$('.tbl_row_text:contains("Summary")').next().children("input").val(newsSummary1);
$('.tbl_row_text:contains("Featured Image")').each(function(){
	$(this).next().children("input").first().val(newsImage1);
});


$('label:contains("Summary")').parent("td").next().children("textarea").val(newsSummary1);

//$('textarea.reTextArea').show(0).val(NewsHtml1);

//$('.reContentCell').children("iframe").hide(0)
//$('.reContentCell').append('<textarea class="reTextArea" style="height: 173px;"></textarea>');

$('table .reMode_html').parent().trigger("click");
$('.reContentCell textarea.reTextArea').val(NewsHtml1);


