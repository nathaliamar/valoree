newsTitle1 = "Robotics Team Wins";
newsSummary1 = "Robotics Team were winners at the Minnesota Technology Fair this past weekend where their robot";
newsImage1 = "/Common/resources/DesignPortfolio/SiteThemes/CommonLib/news/robot.jpg";
NewsHtml1 = "The school Robotics Team were winners at the Minnesota Technology Fair this past weekend where their robot, entirely crafted from carbon fiber. See pictures of the robot – which was name “Bozo” by the Grade 10 Science classes that worked together to build it – right here!";

$('.add-new-page-modal-form-title').children('input').val(newsTitle1);

$('.tbl_row_text:contains("Title")').next().children("input").val(newsTitle1);
$('label:contains("Summary")').parent("td").next().children("textarea").val(newsSummary1);
$('.tbl_row_text:contains("Summary")').next().children("input").val(newsSummary1);
$('.tbl_row_text:contains("Featured Image")').each(function(){
	$(this).next().children("input").first().val(newsImage1);
});


$('label:contains("Summary")').parent("td").next().children("textarea").val(newsSummary1);

//$('textarea.reTextArea').show(0).val(NewsHtml1);

$('.reContentCell').children("iframe").hide(0)
$('.reContentCell').append('<textarea class="reTextArea" style="height: 173px;"></textarea>');
$('.reContentCell textarea.reTextArea').val(NewsHtml1);