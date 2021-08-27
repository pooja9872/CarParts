const items = [
    {
        name: 'Bumpers & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/bumpers_-and-_components.jpg'
    },

    {
        name: 'Fenders & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fenders_-and-_components.jpg'
    },

    {
        name: 'Mirrors & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/mirrors_-and-_components.jpg'
    },

    {
        name: 'Hoods & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/hoods_-and-_components.jpg'
    },

    {
        name: 'Grilles & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/grilles_-and-_components.jpg'
    },

    {
        name: 'Door Handles, Locks & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/door_handles-comma-_locks_-and-_accessories.jpg'
    },

    {
        name: 'Windows & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/windows_-and-_components.jpg'
    },

    {
        name: 'Other Auto Body Replacement',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/other_auto_body_replacement.jpg'
    },


];


const item_json = JSON.stringify(items);

localStorage.setItem("item", item_json);

let items_get = localStorage.getItem("item");

items_get = JSON.parse(items_get);

//console.log("items_get", items_get);


function showItems() {
    var data_div = document.getElementById("data");
    items_get.forEach(function (product) {
        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        p_name.style.marginTop = "25px";

        let image = document.createElement("img");
        image.src = product.image;

        div.append(image, p_name);

        data_div.append(div);

    });

}
showItems();


const itemssecond = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Turn Signals, Side Markers & Other Lights',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/turn_signals-comma-_side_markers_-and-_other_lights.jpg'
    },

    {
        name: 'Switches, Relays, Wiring & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/switches-comma-_relays-comma-_wiring_-and-_components.jpg'
    },

    {
        name: 'Corner Lights & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/corner_lights_-and-_components.jpg'
    },

    {
        name: 'Off-Road Lighting',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/off-road_lighting.jpg'
    },

    {
        name: 'Bulbs',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/bulbs.jpg'
    },


];


const itemsecond_json = JSON.stringify(itemssecond);

localStorage.setItem("itemsecond", itemsecond_json);

let items_get_second = localStorage.getItem("itemsecond");

items_get_second = JSON.parse(items_get_second);

//console.log("items_get", items_get_second);


function showItems1() {
    var data_div_2 = document.getElementById("data1");
    items_get_second.forEach(function (product) {
        let div1 = document.createElement("div");

        let p_name_second = document.createElement("p");
        p_name_second.innerText = product.name;
        p_name_second.style.marginTop = "25px";

        let image_1 = document.createElement("img");
        image_1.src = product.image;

        div1.append(image_1, p_name_second);

        data_div_2.append(div1);

    });

}
showItems1();



const itemsthird = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Turn Signals, Side Markers & Other Lights',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/turn_signals-comma-_side_markers_-and-_other_lights.jpg'
    },

    {
        name: 'Switches, Relays, Wiring & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/switches-comma-_relays-comma-_wiring_-and-_components.jpg'
    },

    {
        name: 'Corner Lights & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/corner_lights_-and-_components.jpg'
    },

    {
        name: 'Off-Road Lighting',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/off-road_lighting.jpg'
    },

    {
        name: 'Bulbs',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/bulbs.jpg'
    },


];


const itemthird_json = JSON.stringify(itemsthird);

localStorage.setItem("itemthird", itemthird_json);

let items_get_third = localStorage.getItem("itemthird");

items_get_third = JSON.parse(items_get_third);



function showItems2() {
    var data_div_3 = document.getElementById("data2");
    items_get_third.forEach(function (product) {
        let div2 = document.createElement("div");

        let p_name_third = document.createElement("p");
        p_name_third.innerText = product.name;
        p_name_third.style.marginTop = "25px";

        let image_2 = document.createElement("img");
        image_2.src = product.image;

        div2.append(image_2, p_name_third);

        data_div_3.append(div2);

    });

}
showItems2();

const itemsfourth = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Turn Signals, Side Markers & Other Lights',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/turn_signals-comma-_side_markers_-and-_other_lights.jpg'
    },

    {
        name: 'Switches, Relays, Wiring & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/switches-comma-_relays-comma-_wiring_-and-_components.jpg'
    },

    {
        name: 'Corner Lights & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/corner_lights_-and-_components.jpg'
    },

    {
        name: 'Off-Road Lighting',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/off-road_lighting.jpg'
    },

    {
        name: 'Bulbs',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/bulbs.jpg'
    },


];


const itemfourth_json = JSON.stringify(itemsfourth);

localStorage.setItem("itemfourth", itemfourth_json);

let items_get_fourth = localStorage.getItem("itemfourth");

items_get_fourth = JSON.parse(items_get_fourth);

console.log(items_get_fourth);



function showItems3() {
    var data_div_4 = document.getElementById("data3");
    items_get_fourth.forEach(function (product) {
        let div3 = document.createElement("div");

        let p_name_fourth = document.createElement("p");
        p_name_fourth.innerText = product.name;
        p_name_fourth.style.marginTop = "25px";

        let image_3 = document.createElement("img");
        image_3.src = product.image;

        div3.append(image_3, p_name_fourth);

        data_div_4.append(div3);

    });

}
showItems3();


const itemsfifth = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Turn Signals, Side Markers & Other Lights',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/turn_signals-comma-_side_markers_-and-_other_lights.jpg'
    },

    {
        name: 'Switches, Relays, Wiring & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/switches-comma-_relays-comma-_wiring_-and-_components.jpg'
    },

    {
        name: 'Corner Lights & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/corner_lights_-and-_components.jpg'
    },

    {
        name: 'Off-Road Lighting',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/off-road_lighting.jpg'
    },

    {
        name: 'Bulbs',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/bulbs.jpg'
    },


];


const itemfifth_json = JSON.stringify(itemsfifth);

localStorage.setItem("itemfifth", itemfifth_json);

let items_get_fifth = localStorage.getItem("itemfifth");

items_get_fifth = JSON.parse(items_get_fifth);



function showItems4() {
    var data_div_5 = document.getElementById("data4");
    items_get_fifth.forEach(function (product) {
        let div4 = document.createElement("div");

        let p_name_fifth = document.createElement("p");
        p_name_fifth.innerText = product.name;
        p_name_fifth.style.marginTop = "25px";

        let image_4 = document.createElement("img");
        image_4.src = product.image;

        div4.append(image_4, p_name_fifth);

        data_div_5.append(div4);

    });

}
showItems4();

const itemssix = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Turn Signals, Side Markers & Other Lights',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/turn_signals-comma-_side_markers_-and-_other_lights.jpg'
    },

    {
        name: 'Switches, Relays, Wiring & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/switches-comma-_relays-comma-_wiring_-and-_components.jpg'
    },

    {
        name: 'Corner Lights & Components',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/corner_lights_-and-_components.jpg'
    },

    {
        name: 'Off-Road Lighting',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/off-road_lighting.jpg'
    },

    {
        name: 'Bulbs',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/bulbs.jpg'
    },


];


const itemsix_json = JSON.stringify(itemssix);

localStorage.setItem("itemsix", itemsix_json);

let items_get_six = localStorage.getItem("itemsix");

items_get_six = JSON.parse(items_get_six);
console.log(items_get_six);



function showItems5() {
    var data_div_6 = document.getElementById("data5");
    items_get_six.forEach(function (product) {
        let div5 = document.createElement("div");

        let p_name_six = document.createElement("p");
        p_name_six.innerText = product.name;
        p_name_six.style.marginTop = "25px";

        let image_5 = document.createElement("img");
        image_5.src = product.image;

        div5.append(image_5, p_name_six);

        data_div_6.append(div5);

    });

}
showItems5();

const itemsseven = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },


];


const itemseven_json = JSON.stringify(itemsseven);

localStorage.setItem("itemseven", itemseven_json);

let items_get_seven = localStorage.getItem("itemseven");

items_get_seven = JSON.parse(items_get_seven);
console.log(items_get_seven);



function showItems6() {
    var data_div_7 = document.getElementById("data6");
    items_get_seven.forEach(function (product) {
        let div6 = document.createElement("div");

        let p_name_seven = document.createElement("p");
        p_name_seven.innerText = product.name;
        p_name_seven.style.marginTop = "25px";

        let image_6 = document.createElement("img");
        image_6.src = product.image;

        div6.append(image_6, p_name_seven);

        data_div_7.append(div6);

    });

}
showItems6();


const itemseight = [
    {
        name: 'Headlights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/headlights-comma-_components_-and-_accessories.jpg'
    },

    {
        name: 'Tail Lights, Back Up Lights & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/tail_lights-comma-_back_up_lights_-and-_accessories.jpg'
    },

    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },
    {
        name: 'Fog Lights, Driving Lights, Components & Accessories',
        image: 'https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/fog_lights-comma-_driving_lights-comma-_components_-and-_accessories.jpg'
    },


];


const itemeight_json = JSON.stringify(itemseight);

localStorage.setItem("itemeight", itemeight_json);

let items_get_eight = localStorage.getItem("itemeight");

items_get_eight = JSON.parse(items_get_eight);
console.log(items_get_eight);



function showItems7() {
    var data_div_8 = document.getElementById("data7");
    items_get_eight.forEach(function (product) {
        let div7 = document.createElement("div");

        let p_name_eight = document.createElement("p");
        p_name_eight.innerText = product.name;
        p_name_eight.style.marginTop = "25px";

        let image_7 = document.createElement("img");
        image_7.src = product.image;

        div7.append(image_7, p_name_eight);

        data_div_8.append(div7);

    });

}
showItems7();


// function dropdown() {
//     let menu = document.getElementById("dropdown");
//     menu.style.display = "block";
// }

// function cross() {
//     let menu = document.getElementById("dropdown");
//     menu.style.display = "none";
// }

function redirectToProductPage() {
    window.location.href = "product.html"
}
