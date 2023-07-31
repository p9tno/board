

const checkbox = document.getElementById('cor_switcher');
const root = document.getElementById('root');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
})



// const inputWeihgt = document.getElementById('weihgt');
// // const output = document.getElementById('test');
//
// inputWeihgt.addEventListener('input', (event) => {
//   // output.innerText = event.target.value;
//   console.log(event.target.value);
// }, true);


jQuery(function($) {

    $(document.body).on('click', '.minus, .plus', function() {
        let qty = $(this).parent().find( 'input' );
        let	val = parseInt( qty.val() );
        let	min = parseInt( qty.attr( 'min' ) );
        let	max = parseInt( qty.attr( 'max' ) );
        let	step = parseInt( qty.attr( 'step' ) );

        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( max <= val ) ) {
                qty.val( max );
            } else {
                qty.val( val + step );
            }
        } else {
            if ( min && ( min >= val ) ) {
                qty.val( min );


            } else if ( val > 1 ) {
                qty.val( val - step );
            }
        }



        let quantity = parseInt(qty.val());
        // console.log(quantity);
        // console.log(this);




        if (quantity == min) {
            $('#weihgtMinus').addClass('disabled');
        } else {
            $('#weihgtMinus').removeClass('disabled');
        }

        if (quantity == max) {
            $('#weihgtPlus').addClass('disabled');
        } else {
            $('#weihgtPlus').removeClass('disabled');
        }

        $('.tool__preview span').css({
            "width" : (quantity) + "px",
            "height" : (quantity) + "px",
        });

    })

    function disabledButton(plus, minus, quantity, min, max) {
        if (quantity == min) {
            minus.addClass('disabled');
        } else {
            minus.removeClass('disabled');
        }

        if (quantity == max) {
            plus.addClass('disabled');
        } else {
            plus.removeClass('disabled');
        }
    }
});
