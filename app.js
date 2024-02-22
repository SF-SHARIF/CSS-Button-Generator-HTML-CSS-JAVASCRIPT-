// All Element Selector Here
const btn_final_result = document.querySelector('.btn-output .btn')
const acc_item_all = document.querySelectorAll('.acc-item');
const font_and_text_full_content = document.querySelector('.font_text-box');
const button_padding_boxShadow = document.querySelector('._button-full-content');
const border_full_content = document.querySelector('.border-full-content');
const button_background_color_content = document.querySelector('.button-background-color-content');
const button_hover_content = document.querySelector('.button-hover-content');

// Accordion Evetn Handle
acc_item_all.forEach((item) => {
    let title = item.querySelector('.item-title')

    title.addEventListener('click', function () {
        this.parentNode.classList.toggle('show');

        if (this.parentNode.classList.contains('show')) {
            title.nextElementSibling.style.maxHeight = title.nextElementSibling.scrollHeight + 100 + 'px'
        } else {
            title.nextElementSibling.style.maxHeight = 0 + 'px'
        }
    })
})

// --------------\\
// Font/Text Element Child Selector Here
const button_input_text = font_and_text_full_content.querySelector('#text-input');
const button_font_family = font_and_text_full_content.querySelector('#font-family-select');
const button_text_color = font_and_text_full_content.querySelector('#input-text-color');
const button_text_color_input_output = font_and_text_full_content.querySelector('#text-color-output');
const button_font_size = font_and_text_full_content.querySelector('#input-font-size');
const button_text_shadow_content = font_and_text_full_content.querySelector('.checkbox-output-content');
const button_text_shadow_content_on_off = font_and_text_full_content.querySelector('input[type="checkbox"]');
const button_text_shadow_color = font_and_text_full_content.querySelector('#input-text-shadow-color');
const button_text_shadow_color_input_output = font_and_text_full_content.querySelector('#input-text-shadow-color-output');
const button_text_shadow_Xoffset = font_and_text_full_content.querySelector('#X-offset');
const button_text_shadow_Yoffset = font_and_text_full_content.querySelector('#Y-offset');
const button_text_shadow_blur = font_and_text_full_content.querySelector('#blur');
const button_font_weight = font_and_text_full_content.querySelector('#bold');


// Button Input Text Event Handle
button_input_text.addEventListener('input', function () {
    btn_final_result.innerText = this.value.trim();
    document.querySelector('.html-code-text-box pre').innerText = `<button type="button" class="btn">${this.value.trim()}</button>`;
})

// Button Font Family Event Handle
button_font_family.addEventListener('input', function () {
    btn_final_result.style.fontFamily = this.value;
   document.querySelector('.css-style-text-box .line-2').innerText = `font-family: ${this.value};`

   
    
})

// Button Text Color Event Handle
button_text_color.addEventListener('input', function () {
    btn_final_result.style.color = this.value;
    button_text_color_input_output.value = this.value;

    document.querySelector('.css-style-text-box .line-3').innerText = `color: ${this.value};`
})

// Button Text Color Input Output Event Handle
button_text_color_input_output.addEventListener('input', function () {
    if (Number(this.value.length) == 7) {
        button_text_color.value = this.value
        btn_final_result.style.color = this.value;

        document.querySelector('.css-style-text-box .line-3').innerText = `color: ${this.value};`
    }
})

// Button Font Size Event Handle
button_font_size.addEventListener('input', function () {
    btn_final_result.style.fontSize = `${this.value}px`;
    this.previousElementSibling.innerText = `Font Size: ${this.value}px`;
    document.querySelector('.css-style-text-box .line-4').innerText = `font-size: ${this.value}px;`;
})

// button text shadow content eneble and disabl Event Handle
button_text_shadow_content_on_off.addEventListener('click', function () {
    button_text_shadow_content.classList.toggle('box-disabled');
    let shadow_all_input = button_text_shadow_content.querySelectorAll('input');


    if (this.checked) {
        this.nextElementSibling.innerText = `Text-Shadaw ? ON`;

        shadow_all_input.forEach((input) => {
            input.disabled = false
        })
    } else {
        this.nextElementSibling.innerText = `Text-Shadaw ? OFF`;

        shadow_all_input.forEach((input) => {
            input.disabled = true
        })
    }
})

// Button Text Shadow Color Event Handle
button_text_shadow_color.addEventListener('input', function () {
    btn_final_result.style.textShadow = `${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${this.value}`;

    button_text_shadow_color_input_output.value = this.value;

    document.querySelector('.css-style-text-box .line-5').innerText = `text-shadow: ${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${this.value};`;
    
})

// Button Text Shadow color input And Output Event Handle
button_text_shadow_color_input_output.addEventListener('input', function () {
    if (Number(this.value.length) == 7) {
        button_text_shadow_color.value = this.value;
        btn_final_result.style.textShadow = `${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${this.value}`;
    }

    document.querySelector('.css-style-text-box .line-5').innerText = `text-shadow: ${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${this.value};`;
})

// Button Text Shadow Horizontal Event Handle
button_text_shadow_Xoffset.addEventListener('input', function () {
    this.previousElementSibling.innerText = `X offset: ${this.value}px`

    btn_final_result.style.textShadow = `${this.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${button_text_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-5').innerText = `text-shadow: ${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${button_text_shadow_color.value};`;
})

// Button Text Shadow Vertical Event Handle
button_text_shadow_Yoffset.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Y offset: ${this.value}px`

    btn_final_result.style.textShadow = `${button_text_shadow_Xoffset.value}px ${this.value}px ${button_text_shadow_blur.value}px ${button_text_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-5').innerText = `text-shadow: ${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${button_text_shadow_color.value};`;
})

// Button Text Shadow Blur Event Handle
button_text_shadow_blur.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Blur: ${this.value}px`

    btn_final_result.style.textShadow = `${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${this.value}px ${button_text_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-5').innerText = `text-shadow: ${button_text_shadow_Xoffset.value}px ${button_text_shadow_Yoffset.value}px ${button_text_shadow_blur.value}px ${button_text_shadow_color.value};`;
})

// Button Font Weight Event Handle
button_font_weight.addEventListener('click', function () {
    if (this.checked) {
        btn_final_result.style.fontWeight = this.value;
        document.querySelector('.css-style-text-box .line-6').innerText = `font-weight: ${this.value};`
    } else {
        btn_final_result.style.fontWeight = 'normal';
        document.querySelector('.css-style-text-box .line-6').innerText = `font-weight: normal;`
    }
})

// ---------------------------------- Font/Text end --------------------------------------\\

// Button Element Child Selector Here
const button_padding__TopBottom = button_padding_boxShadow.querySelector('#p_top-bottom');
const button_padding__LeftRight = button_padding_boxShadow.querySelector('#p_left-right');
const box_shadow_content = button_padding_boxShadow.querySelector('.bs-contect_ed');
const button_box_shadow_content_ON_OFF = button_padding_boxShadow.querySelector('#off-on-box-shadaw');
const button_box_shadow_color = button_padding_boxShadow.querySelector('#input-box-shadow-color');
const button_input_box_shadow_color_output = button_padding_boxShadow.querySelector('#input-box-shadow-color-output');
const button_box_shadow_Xoffset = button_padding_boxShadow.querySelector('#box-X-offset');
const button_box_shadow_Yoffset = button_padding_boxShadow.querySelector('#box-Y-offset');
const button_box_shadow_blur = button_padding_boxShadow.querySelector('#box-blur');
const button_box_shadow_spread = button_padding_boxShadow.querySelector('#box-spread');


// Button Padding Top Bottom Event Handle
button_padding__TopBottom.addEventListener('input', function () {
    this.parentNode.parentNode.parentNode.firstElementChild.innerText = `Padding: ${this.value}px ${button_padding__LeftRight.value}px`;

    btn_final_result.style.padding = `${this.value}px ${button_padding__LeftRight.value}px`;

    document.querySelector('.css-style-text-box .line-7').innerText = ` padding: ${button_padding__TopBottom.value}px ${button_padding__LeftRight.value}px;`
})

// Button Padding Left and Right Event Handle
button_padding__LeftRight.addEventListener('input', function () {
    this.parentNode.parentNode.parentNode.firstElementChild.innerText = `Padding: ${button_padding__TopBottom.value}px ${this.value}px`;

    btn_final_result.style.padding = `${button_padding__TopBottom.value}px ${this.value}px`;

    document.querySelector('.css-style-text-box .line-7').innerText = ` padding: ${button_padding__TopBottom.value}px ${button_padding__LeftRight.value}px;`
})

// Button Box Shadow Content ON OFF Event Handle
button_box_shadow_content_ON_OFF.addEventListener('click', function () {
    box_shadow_content.classList.toggle('box-disabled');
    let shadow_all_input = box_shadow_content.querySelectorAll('input');

    if (this.checked) {
        this.nextElementSibling.innerText = `Button Box-Shadaw ? ON`;

        shadow_all_input.forEach((input) => {
            input.disabled = false
        })
    } else {
        this.nextElementSibling.innerText = `Button Box-Shadaw ? OFF`;

        shadow_all_input.forEach((input) => {
            input.disabled = true
        })
    }
})

// Button Box Shadow Color Event Handle
button_box_shadow_color.addEventListener('input', function () {
    button_input_box_shadow_color_output.value = this.value

    btn_final_result.style.boxShadow = `${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${this.value}`;

    document.querySelector('.css-style-text-box .line-8').innerText =  `box-shadow: ${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value};`;
})

// Button Input Box Shadow Color Output Event Handle
button_input_box_shadow_color_output.addEventListener('input', function () {
    if (Number(this.value.length) === 7) {
        button_box_shadow_color.value = this.value;
        btn_final_result.style.boxShadow = `${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${this.value}`;

        document.querySelector('.css-style-text-box .line-8').innerText =  `box-shadow: ${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${this.value};`;
    }
})

// Button Box Shadow Horizontal Event Handle
button_box_shadow_Xoffset.addEventListener('input', function () {
    this.previousElementSibling.innerText = `X offset: ${this.value}px`;

    btn_final_result.style.boxShadow = `${this.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-8').innerText =  `box-shadow: ${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value};`;
})

// Button Box Shadow Vertical Event Handle
button_box_shadow_Yoffset.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Y offset: ${this.value}px`;

    btn_final_result.style.boxShadow = `${button_box_shadow_Xoffset.value}px ${this.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-8').innerText =  `box-shadow: ${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value};`;
})

// Button Box Shadow Blur Event Handle
button_box_shadow_blur.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Blur: ${this.value}px`;

    btn_final_result.style.boxShadow = `${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${this.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-8').innerText =  `box-shadow: ${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value};`;
})

// Button Box Shadow Spread Event Handle
button_box_shadow_spread.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Spread: ${this.value}px`;

    btn_final_result.style.boxShadow = `${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${this.value}px ${button_box_shadow_color.value}`;

    document.querySelector('.css-style-text-box .line-8').innerText =  `box-shadow: ${button_box_shadow_Xoffset.value}px ${button_box_shadow_Yoffset.value}px ${button_box_shadow_blur.value}px ${button_box_shadow_spread.value}px ${button_box_shadow_color.value};`;
})


// ---------------------------------- Button Padding and Box shadow End --------------------------------------\\

// Border Element Child Selector Here
const button_border_width = border_full_content.querySelector('#border-width-input');
const button_border_style = border_full_content.querySelector('#border-style-select');
const button_border_color = border_full_content.querySelector('#border-input-color');
const button_border_color_input_output = border_full_content.querySelector('#border-color-input-output');
const button_border_radius = border_full_content.querySelector('#border-radius-input');


// Button Border Width Event Handle
button_border_width.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Border Width: ${this.value}px`;

    btn_final_result.style.border = `${this.value}px ${button_border_style.value} ${button_border_color.value}`;

    document.querySelector('.css-style-text-box .line-9').innerText = `border: ${button_border_width.value}px ${button_border_style.value} ${button_border_color.value};`;
})

// Button Border Style Event Handle
button_border_style.addEventListener('input', function () {
    btn_final_result.style.border = `${button_border_width.value}px ${this.value} ${button_border_color.value}`;

    document.querySelector('.css-style-text-box .line-9').innerText = `border: ${button_border_width.value}px ${button_border_style.value} ${button_border_color.value};`;
})

// Button Border Color Event Handle
button_border_color.addEventListener('input', function () {
    button_border_color_input_output.value = this.value;

    btn_final_result.style.border = `${button_border_width.value}px ${button_border_style.value} ${this.value}`;

    document.querySelector('.css-style-text-box .line-9').innerText = `border: ${button_border_width.value}px ${button_border_style.value} ${button_border_color.value};`;
})

// Button Border Input and Output Color Event Handle
button_border_color_input_output.addEventListener('input', function () {
    if (Number(this.value.length) === 7) {
        button_border_color.value = this.value;
        btn_final_result.style.border = `${button_border_width.value}px ${button_border_style.value} ${this.value}`;

        document.querySelector('.css-style-text-box .line-9').innerText = `border: ${button_border_width.value}px ${button_border_style.value} ${this.value};`;
    }

})

// Button Border Radius Event Handle
button_border_radius.addEventListener('input', function () {
    this.previousElementSibling.innerText = `Border Radius: ${this.value}px`;
    btn_final_result.style.borderRadius = `${this.value}px`;

    document.querySelector('.css-style-text-box .line-10').innerText = `border-radius: ${this.value}px;`
})

// ---------------------------------- Button Border End --------------------------------------\\

// Button Background Element Child Selector Here
const background_color_input = button_background_color_content.querySelector('#background-input-color');
const background_color_input_output = button_background_color_content.querySelector('#background-color-input-output');

// Backgound Color Input Event Handle
background_color_input.addEventListener('input', function () {
    btn_final_result.style.background = this.value;
    background_color_input_output.value = this.value;

    
    document.querySelector('.css-style-text-box .line-11').innerText = `background-color: ${this.value};`
})

// Backgound Color Input and output Event Handle
background_color_input_output.addEventListener('input', function () {
    if (Number(this.value.length) === 7) {
        background_color_input.value = this.value;
        btn_final_result.style.background = this.value;

        
    document.querySelector('.css-style-text-box .line-11').innerText = `background-color: ${this.value};`
    }
})

// ---------------------------------- Button Background End --------------------------------------\\

// Button Hover Element Child Selector Here
const button_hover_input_text_color = button_hover_content.querySelector('#hover-text-input-color');
const button_hover_input_output_text_color = button_hover_content.querySelector('#hover-text-color-input-output');
const button_hover_input_background_color = button_hover_content.querySelector('#hover-background-input-color');
const button_hover_input_output_background_color = button_hover_content.querySelector('#hover-background-color-input-output');


// Button Hover Input Text Color Event Handle
button_hover_input_text_color.addEventListener('input', function () {
    button_hover_input_output_text_color.value = this.value;

    
    document.querySelector('.css-style-text-box .line-14').innerText = `color: ${this.value};`
})

// Button Hover Input_Output Text Color Event Handle
button_hover_input_output_text_color.addEventListener('input', function () {
    if (Number(this.value.length) === 7) {
        button_hover_input_text_color.value = this.value;

        document.querySelector('.css-style-text-box .line-14').innerText = `color: ${this.value};`
    }
})

// Button Hover Input Background Color Event Handle
button_hover_input_background_color.addEventListener('input', function () {
    button_hover_input_output_background_color.value = this.value;

    document.querySelector('.css-style-text-box .line-15').innerText = `background-color: ${this.value};`
})

// Button Hover Input and Output Background Color Event Handle
button_hover_input_output_background_color.addEventListener('input', function () {
    if (Number(this.value.length) === 7) {
        button_hover_input_background_color.value = this.value;

        document.querySelector('.css-style-text-box .line-15').innerText = `background-color: ${this.value};`
    }
})

// At last button hover event handler
btn_final_result.addEventListener('mouseover', function () {
    let color = button_text_color.value;
    let background_color = background_color_input.value;
    let hover_color = button_hover_input_text_color.value;

    btn_final_result.style.color = hover_color;
    btn_final_result.style.background = button_hover_input_background_color.value;

    this.addEventListener('mouseout', function () {
        btn_final_result.style.color = color;
        btn_final_result.style.background = background_color;

    })

})


// // ---------------------------------- Button Hover End --------------------------------------\\

// ------- code output html and css -----\\

// Output Code Element Selector
const output_html_css_full_content = document.querySelector('.output-html-css-code');


// Output Code child Selector
const html_btn = output_html_css_full_content.querySelector('.html-btn');
const css_btn = output_html_css_full_content.querySelector('.css-btn');
const html_box = output_html_css_full_content.querySelector('.html-code-box');
const css_box = output_html_css_full_content.querySelector('.css-code-box');
const content_close_btn = output_html_css_full_content.querySelectorAll('.close-btn');
const content_text_copy_btn = output_html_css_full_content.querySelectorAll('.copy-btn');



// HTML and CSS Button Event Handle
html_btn.addEventListener('click', function () {
    html_box.classList.toggle('html-show')
    css_box.classList.remove('css-show')
})
css_btn.addEventListener('click', function () {
    css_box.classList.toggle('css-show')
    html_box.classList.remove('html-show')
})

// content close btn event handle
content_close_btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        html_box.classList.remove('html-show')
        css_box.classList.remove('css-show')
    })
})

let html_text_code = document.querySelector('.html-code-text-box');
let css_text_code = document.querySelector('.css-style-text-box');


// only pc Copy Event Handle
content_text_copy_btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        let html_content_check = this.parentNode.parentNode.parentNode.classList.contains('html-show');
        
        if (html_content_check) {
            // ----------------------------------------------------------------
            // For mobile device ( is not working 😥 please help me )
            // window.getSelection().selectAllChildren(html_text_code);
            // document.execCommand('copy');
            console.log('ok');
            // ----------------------------------------------------------------
            
            
            let text_get = html_text_code.innerText;
            navigator.clipboard.writeText(text_get);
            
        } else {
            // ----------------------------------------------------------------
            // For mobile device ( is not working 😥 please help me )
            // window.getSelection().selectAllChildren(css_text_code);
            // document.execCommand('copy');
            console.log('no');
            // ----------------------------------------------------------------

            let text_get = css_text_code.innerText;
            navigator.clipboard.writeText(text_get);            
        }

        if (this.firstElementChild.classList.contains('fa-copy')) {
            this.firstElementChild.classList.remove('fa-copy')
            this.firstElementChild.classList.add('fa-check')

            setTimeout(() => {
                this.firstElementChild.classList.remove('fa-check')
                this.firstElementChild.classList.add('fa-copy')
            }, 2000);
        }

    })
})


// const html_content = document.querySelector('.html-code-text-box');
// const css_content = document.querySelector('.css-style-text-box');

// console.log(html_content);


// content_text_copy_btn.forEach((btn) => {
//     btn.addEventListener('click', function () {
//         let html_container = this.parentNode.parentNode.parentNode.classList.contains('html-show');

//         if (html_container) {
//             console.log('ok');

//             window.getSelection().selectAllChildren(html_content);

//             // html_content.select()
            
//             document.execCommand('copy')

//         } else {
//             console.log('no');

//             window.getSelection().selectAllChildren(css_content);
//             document.execCommand('copy')
//         }
//     })
// })