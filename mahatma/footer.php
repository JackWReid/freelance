	<?php wp_footer(); ?>
	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
	<script>
		$(document).ready(function() {
		if($.browser.safari) {
			$(".gallery").addClass("gallery_safari");
			$(".gallery").removeClass("gallery");
			$(".gallery-item").addClass("gallery-item_safari");
			$(".gallery-item").removeClass("gallery-item");
			
			$(".gallery-stream").addClass("gallery-stream_safari");
			$(".gallery-stream").removeClass("gallery-stream");
			$(".gallery-card").addClass("gallery-card_safari");
			$(".gallery-card").addClass("gallery-card");
		}else{}
		});
		</script>
	</body>
</html>