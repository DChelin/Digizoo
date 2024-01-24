<script>
  jQuery(document).ready(function ($) {
    // Update these field IDs with the actual IDs from your form
    var quantityFieldId = '#input_8_30'; // Replace with your quantity field ID
    var widthFieldId = '#input_8_32'; // Replace with your width field ID
    var heightFieldId = '#input_8_31'; // Replace with your height field ID
    var totalPriceFieldId = '#input_8_33'; // Replace with your total price field ID

    var productFieldId = '#input_8_35'; // Replace with your product field ID

       // Calculate total price when the quantity or size changes
    function calculateTotalPrice() {
      var quantity = parseInt($(quantityFieldId).val());
      var width = parseFloat($(widthFieldId).val());
      var height = parseFloat($(heightFieldId).val());

      var pricePerSquareMeter;
      if (quantity >= 0 && quantity <= 150) {
        pricePerSquareMeter = 200;
      } else if (quantity <= 300) {
        pricePerSquareMeter = 180;
      } else if (quantity <= 500) {
        pricePerSquareMeter = 170;
      } else {
        pricePerSquareMeter = 160; // Default for quantity > 500
      }

      // Convert sticker size to square meters
      var stickerSizeInSquareMeters = (width * height) / 10000; // Convert to square meters (assuming width and height are in centimeters)

      // Calculate total price
      var totalPrice = quantity * stickerSizeInSquareMeters * pricePerSquareMeter;

      // Update the total price field
      $(totalPriceFieldId).val('$' + totalPrice.toFixed(2));

      // Set the calculated total as the product field value
      $(productFieldId).val(totalPrice.toFixed(2));
    }

    // Bind the calculation function to the change event of the relevant fields
    $(quantityFieldId + ',' + widthFieldId + ',' + heightFieldId).change(function () {
      calculateTotalPrice();
    });

    // Initial calculation when the page loads
    calculateTotalPrice();
  });
</script>