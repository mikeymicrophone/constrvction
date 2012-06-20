$(document).ready(function() {

	// make a copy of form to refresh with
	var uploadForm = $('#upload-form')
	var uploadFormHTML = uploadForm.html();
	var preloaderCaption = $('#preloader-caption');
	var uploadedImage = $('#uploaded-image');

	// 3D settings
	var dressObj = '/assets/3d/dress2.obj';
	var dressOneObj = '/assets/3d/dress_one_shoulder.obj';
	var mensShirt = '/assets/3d/mens_shirt.obj';
	var womensShirt = '/assets/3d/womens_shirt.obj';
	var meshObjs = new Array(dressObj, dressOneObj, mensShirt, womensShirt);

	// Callbacks

	// for preloading the images onto texture
	var intervalID;

	function initLogic() {
		curMeshObj = meshObjs[0];
		curImg = '/assets/3d/nyc-sq.jpg';
		//init3DBuild('/assets/3d/dress2.obj', '/assets/3d/nyc-sq.jpg');
		init3DBuild(curMeshObj, curImg);
		$("#GL").css('z-index', 10);
	}

	function initUploadForm() {
		$('#photoimg').on('change', function() {
			$("#img-loader").fadeIn("fast");
			$("#imageform").ajaxForm({
				target : '#hidden-image',
				success : onUploadComplete
			}).submit();
		});
	}

	function onUploadComplete() {

		$("#img-loader").fadeOut("slow");

		// grab image name from text
		var img = $('#hidden-image').text();
		
		// reset the form to it can be used again
		$('#photoimg').off('change');
		uploadForm.html("");
		uploadForm.html(uploadFormHTML);

		// reset variable
		uploadedImage = $('#uploaded-image');

		uploadedImage.html('<a href="#" id="user-img" data-img="' + img + '" ><img src="' + img + '"></a>');

		uploadedImage.show();

		initUploadForm();

		refreshTexture(img);

		// add mosue event to newly uploaded image

		$('a#user-img').on('click', function(e) {
			e.preventDefault();
			var img = $(this).attr('data-img');
			preloaderCaption.html("Loading...");
			intervalID = setInterval(refreshTexture, 1000, img);
		});

	}

	function initPatternSelectors() {
		$('a.preselect').each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				var img = $(this).attr('data-img');
				preloaderCaption.html("Loading...");
				intervalID = setInterval(refreshTexture, 1000, img);

			});
		});
	}

	function initMeshSelectors() {
		$('a.mesh-link').each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				var id = $(this).attr('data-mesh-id');
				console.log("mesh id: " + id);
				curMeshObj = meshObjs[(id - 1 )];
				preloaderCaption.html("Loading...");
				refresh(curMeshObj, curImg);
				preloaderCaption.html("");
			});
		});

	}

	function initLookButtons() {
		$('a#btn-save').on('click', function() {
			console.log("TODO: enable this button");
		})
	}

	function refreshTexture(img) {
		curImg = img;
		refresh(curMeshObj, curImg);
		preloaderCaption.html("&nbsp;");
		clearInterval(intervalID);
	}

	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// Point of Entry
	initLogic();
	initLookButtons();
	initPatternSelectors();
	initMeshSelectors();
	initUploadForm();

});
