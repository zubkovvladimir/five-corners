function hidePlaceholder($target) {
  if ($target.val() !== '') {
    $target.nextAll('.input__placeholder').first().addClass('focused');
  } else {
    $target.nextAll('.input__placeholder').first().removeClass('focused');
  }
}

function addFocusEventListeners(targetclass) {
  $(targetclass).on('focusout', function (e) {
    hidePlaceholder($(e.target));
  });

  $(targetclass).on('focusin', function (e) {
    $(e.target).nextAll('.input__placeholder').first().addClass('focused');
  });
}

function inputInit() {
  const array = ['.js-input'];
  array.forEach(function (item) {
    addFocusEventListeners(item);
  });
}

inputInit();
