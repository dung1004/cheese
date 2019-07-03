// xử lý owl banner
$('.owl-carousel').owlCarousel({
    stagePadding: 100,
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

// -------------------------------------------xử lý show-tab-----------------------------
function show_tab(item_tab, showTab){
		for(var i = 0; i < item_tab.length; i++)
		{
			item_tab[i].onclick = function(){
				for(var k = 0; k < item_tab.length; k++){
					item_tab[k].classList.remove('active');
				}
			this.classList.add('active');
			var showData = this.getAttribute('data-show');
			var phanTu = document.getElementById(showData);
			for(var k = 0; k < showTab.length; k++){
				showTab[k].classList.remove('active');
			}
			phanTu.classList.add('active');
		}
	}
}
var item_tab1 = document.querySelectorAll('.it1'),
	showTab1 = document.querySelectorAll('.st1'),
	item_tab2 = document.querySelectorAll('.it2'),
	showTab2 = document.querySelectorAll('.st2');
show_tab(item_tab1, showTab1);
show_tab(item_tab2, showTab2);


// ======================xử lý đóng tab=================================
function close_modal(){
	var times = document.querySelector('.close_modal'),
		tab_modal = document.querySelector('.modal_popup'),
		img = document.querySelectorAll('.detail_popup');
		times.onclick = function(){
			tab_modal.classList.add('status');
		}
		for (var i = 0; i < img.length; i++) {
			img[i].onclick = function(){
				tab_modal.classList.remove('status');
			}
		}
}
close_modal();
