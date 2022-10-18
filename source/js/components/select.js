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
