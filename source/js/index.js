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

$('.select__select').styler({
  selectPlaceholder: 'Тип упаковки',
  selectSmartPositioning: -1,
  selectSearch: true,
  onSelectOpened: function () {
    $(this)
      .find('.jq-selectbox__trigger-arrow')
      .css({ transform: 'rotate(180deg)', top: '12px' });
  },
  onSelectClosed: function () {
    $(this)
      .find('.jq-selectbox__trigger-arrow')
      .css({ transform: 'rotate(0deg)', top: '14px' });
  },
});

$('.select__select').on('change', () => {
  $('.select__placeholder').addClass('focused');
});
