$(document).ready(function(){
    $(".edit-button").click(function(){
      $(".cart-sidebar").addClass("show");
    });
    $(".close-menu").click(function(){
      $(".cart-sidebar").removeClass("show");
    });
    $('.coupon__two').hide();
    $('#switch-toggle').on('click', function(){
      $('.coupon__one, .coupon__two').toggle();
    })
    $(".ind_tm_slote_spec_date").hide();
    $(".for-action" ).hide();    
    $("#action-edit" ).hide();
    $(".cancle").hide();
    $(".tbl-delivery-schedule .delete").hide();
    // $("table tr td:first-child .el-switch-green").hide();
    var actions = $("table.for-action td:last-child").html();
        
 // Function for "Add Specific Delivery Dates" under Delivery Days & Specific Delivery Dates
    $(document).on("click", ".add_delivery_days", function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="date" class="ib-sm" name="ds_delivery-dates" placehoder="Select Date" id="ds_delivery-dates"></td>' +
            '<td><input type="text" class="ib-sm" name="additional-charges" placeholder="Additional Charges" id="additional-charges"></td>' +
            '<td><input type="text" class="ib-sm" name="charges-label" placeholder="Charges Label" id="charges-label"></td>' +
            '<td><select class="ib-sm" name="weekday" id="maximum-orders"><option value="05">05 </option><option value="15">15</option><option value="20">20</option></select></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $('#delivery_days_table').append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
     });

    // Function for " Add more weekday Based Scheduleeekdays" under Weekdays
    $(".add-more-weekday").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td width="140"><select class="ib-sm" name="weekday" id="weekday"><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday </option><option value="Thursday">Thursday</option><option value="Friday">Friday </option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option></select></td>' +
            '<td><input type="text" class="form-control" id="min-time" name="holiday-name" placeholder="00:00 AM" id="time-slote" value="01:01 AM"></td>' +
            '<td><input type="text" class="form-control" id="min-time" name="holiday-name" placeholder="00:00 AM" id="time-slote" value="01:01 AM"></td>' +
            '<td><select class="ib-sm" name="weekday" id="weekday"><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday </option><option value="Thursday">Thursday</option><option value="Friday">Friday </option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option></select></td>' +
            '<td><select class="ib-sm" name="weekday" id="weekday"><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday </option><option value="Thursday">Thursday</option><option value="Friday">Friday </option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option></select></td>' +
            '<td><input type="number" class="form-control" id="min-time" name="holiday-name" placeholder="Min Time" id="time-slote" value="Delivery Charges"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $('#weekday-based-schedule').append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
     });

    // Function for " Add more Use Global Holidays" under Holidays
    $(".add-more-holidays").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" id="cb_opt_nm_20" value="cb_opt_val_20" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_20"></label></div></td>' +
            '<td><input type="text" class="form-control" name="holiday-name" placeholder="Enter Holiday" id="holiday-name"></td>' +
            '<td class="d-flex"><select class="ib-sm mr-1" name="min-time" id="mintime"><option value="Select Date">Select Date</option><option value="10-06-2021 to 11-06-2021">10-06-2021</option><option value="11-06-2021 to 02-10-2021">11-06-2021</option></select> To <select class="ib-sm ml-1" name="min-time" id="mintime"><option value="Select Date">Select Date</option><option value="01-10-2021">01-10-2021</option><option value="02-10-2021">02-10-2021</option></select></td>' +
            '<td><select class="ib-sm" name="min-time" id="mintime"><option value="Recurring Every Year">Recurring Every Year</option><option value="Current Year Only">Current Year Only</option></select></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $('#global-holidays').append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });

    // Function for " Add more Time Slote under on boarding
    $(".add-time-slote-onb4").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" id="cb_opt_nm_20" value="cb_opt_val_20" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_20"></label></div></td>' +
            '<td><input type="date" class="form-control w-75 ml-1" name="holiday-name" placeholder="Enter Holiday" id="date-slote"></td>' +
            '<td><input type="text" class="form-control" name="holiday-name" placeholder="00 : 01 AM" id="date-slote"></td>' +
            '<td><select class="ib-sm" name="min-time" id="mintime"><option value="1">1</option><option value="2">2</option><option value="3">3 </option><option value="4">4</option><option value="5">5 </option><option value="6">6</option><option value="7">7</option></select></td>' +
            '<td><input type="text" class="form-control" name="holiday-name" placeholder="$" id="add-charge"></td>' +
            '<td><input type="text" class="form-control" name="holiday-name" placeholder="Enter Holiday" id="add-charge"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $('#set-time-slote-onb4').append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });


   // Append table with add_del_sch row form on add_del_sch new button click
    $(".add_pickup_location").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" placeholder="Enter Address1" id="pickup-location-add1"></td>' +
            '<td><input type="text" class="form-control" name="department" placeholder="Enter Address2" id="pickup-location-add2"></td>' +
            '<td><input type="text" class="form-control" name="phone" placeholder="Enter City" id="pickup-location-city"></td>' +
            '<td><input type="text" class="form-control" name="phone" placeholder="Enter State" id="pickup-location-state"></td>' +
            '<td><input type="text" class="form-control" name="phone" placeholder="Enter Pincode" id="pickup-location-pin"></td>' +
            '<td><input type="text" class="form-control" name="phone" placeholder="Enter country" id="pickup-location-country"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_product_availibility_location").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Day</option><option data-src="assets/images/date-picker.png" >Date</option></select></td>'+
            '<td><input type="date" class="form-control" name="phone" id="pickup-location-city"></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Day</option><option data-src="assets/images/date-picker.png" >Date</option></select></td>' +
            '<td><input type="time" class="form-control" name="" id="pickup-location-city"></td>' +
            '<td><input type="time" class="form-control" name="" id="pickup-location-city"></td>' +
            '<td><input type="number" class="form-control" placeholder="Max Booking" value="" id="pickup-location-state"></td>' +
            '<td><input type="text" class="form-control"  placeholder="Price" id="pickup-location-state"></td>' +
            '<td><input type="text" class="form-control"  placeholder="Description" id="pickup-location-state"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_block").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" placeholder="Select Block Name" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control ib-sm" name="name" placeholder="Select days" id="pickup-location-add1"></td>' +
            '<td><input type="text" class="form-control ib-sm" name="phone" placeholder="Select Start Day" id="pickup-location-city"></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select End Day</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option><option data-src="assets/images/date-picker.png" >Tuesday</option><option data-src="assets/images/date-picker.png" >Wednesday</option><option data-src="assets/images/date-picker.png" >Thursday</option><option data-src="assets/images/date-picker.png" >Friday</option><option data-src="assets/images/date-picker.png" >Saturday</option></select></td>' +
            '<td><input type="text" class="form-control ib-sm" name="phone" placeholder="Price" id="pickup-location-city"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_resource").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" placeholder="Resource Title goes here" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control" name="name" placeholder="Price" id="pickup-location-add1"></td>' +
            '<td></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    $(".add_new_resource").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_21" value="cb_opt_val_21"><span class="el-switch-style"></span></label></td>' +
            '<td><select id="searchresults" required=""><option>Sunday</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option><option>Saturday</option></select></td>'+
            '<td><select id="searchresults" required=""><option>09:45 AM</option><option>10:45 AM</option><option>11:45 AM</option><option>12:45 AM</option></select></td>'+
            '<td><select id="searchresults" required=""><option>01:25 PM</option><option>02:25 PM</option><option>03:25 PM</option></select></td>'+
            '<td><select id="searchresults" required=""><option>02</option><option>03</option><option>04</option><option>05</option></select></td>'+
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);     
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    $(".add_new_template_range").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><select id="searchresults" required=""><option>Select</option><option>Payments Gateways</option><option>Cart Items</option><option>Cart Total</option></select></td>'+
            '<td><select id="searchresults" required=""><option>Select</option><option>Includes any of</option><option>Excludes any of</option><option>Equal to</option></select></td>'+
            '<td><select id="searchresults" required=""><option>Select Value</option><option>Search for a Coupon...</option><option>Search for a Product...</option></select></td>'+
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);     
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_person_type").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" placeholder="Person Type" id="pickup-location-add1"></td>'+
            '<td><input type="number" class="form-control" name="name" placeholder="Bs. Cost" id="pickup-location-add1"></td>'+
            '<td><input type="number" class="form-control" name="name" placeholder="Bl. Cost" id="pickup-location-add1"></td>'+
            '<td><input type="number" class="form-control" name="name" placeholder="Min" id="pickup-location-add1"></td>'+
            '<td><input type="number" class="form-control" name="name" placeholder="Max" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control" name="name" placeholder="Description goes here." id="pickup-location-add1"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_season_pricing").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">P. Val</option><option data-src="assets/images/date-picker.png" >P. Per</option></select></td>' +
            '<td><input type="text" class="form-control" name="name" placeholder="Enter Season" id="pickup-location-add1" ></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>' +
            '<td><input type="date" class="form-control" name="name" placeholder="Enter Season" id="pickup-location-add1" ></td>' +
            '<td><input type="date" class="form-control" name="name" placeholder="Enter Season" id="pickup-location-add1" ></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>' +
            '<td><input type="number" class="form-control" name="name" placeholder="Amt/Per" id="pickup-location-add1"></td>'+
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_sms_notification").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><div class="custom-control custom-checkbox mr-3"><input type="checkbox" class="custom-control-input" id="customCheck10"><label class="custom-control-label" for="customCheck10"></label></div></td>'+
            '<td>4</td>'+
            '<td><textarea class="form-control" name="name" placeholder="Enter Season" rows="1" cols="1">Text message goes here...</textarea></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select Coupon</option><option data-src="assets/images/date-picker.png" >SAVE10</option></select></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">00</option><option data-src="assets/images/date-picker.png" >45</option></select><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Day (s)</option><option data-src="assets/images/date-picker.png" >Hour (s)</option></select><span>After Abandonment</span></td>' +
            '<td>0%</td>' +
            '<td>05%</td>' +
            '<td><label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_23" value="cb_opt_val_23" checked=""><span class="el-switch-style"></span></label></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });


    $(document).on("click", ".sms-notification-edit", function(){        
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
            // $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
           $(".disable").show();
        });     
        $(this).parents("tr").find("td:first-child").each(function(){
            $(this).html('<div class="custom-control custom-checkbox mr-3"><input type="checkbox" class="custom-control-input" id="customCheck10"><label class="custom-control-label" for="customCheck10"></label></div>');
        });
        $(this).parents("tr").find("td:eq(1)").each(function(){
            $(this).html('' + $(this).text() + '');
        });
        $(this).parents("tr").find("td:eq(2)").each(function(){
            $(this).html('<textarea class="form-control hi-50" name="name" placeholder="Enter Season" rows="1" cols="1">' + $(this).text() + '</textarea><div class="error-text mt-3"><h4 class="mb-2">Merge tags available for Text Messages:</h4><p class="mb-2">{{user.name}} - First Name of the User,</p><p class="mb-2">{{shop.name}} - Shop Name [Woo],</p><p class="mb-2">{{shop.link}} - Shop Link [https://cssace.com/tyche/1/],</p><p class="mb-2">{{date.abandoned}} - Date on which the Cart was abandoned,</p><p class="mb-2">{{coupon.code}} - Discount coupon code, </p><p class="mb-2">{{checkout.link}} - Checkout Link to complete the purchase,</p><p>{{phone.number}} - Admin Phone number</p></div>');
        });
        $(this).parents("tr").find("td:eq(3)").each(function(){
            $(this).html('<select><option>Select Coupon</option><option>APRIL2022</option><option>SUMMER 2022</option></select>');
        });
        $(this).parents("tr").find("td:eq(4)").each(function(){
            $(this).html('<div class="d-flex mb-2"><select class="mr-2"><option>00</option><option>45</option></select><select required=""><option>Day (s)</option><option>Hour (s)</option></select></div><span class="b-block">After Abandonment</span>');
        });
        $(this).parents("tr").find("td:eq(5)").each(function(){
            $(this).html('0%');
        });
        $(this).parents("tr").find("td:eq(6)").each(function(){
            $(this).html('0%');
        });
        $(this).parents("tr").find("td:eq(7)").each(function(){
            $(this).html('<label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_23" value="cb_opt_val_23" checked=""><span class="el-switch-style"></span></label>');
        });
        $(this).parents("tr").find(".sms-notification-edit, .add").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    
    $(".add_range").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_23" value="cb_opt_val_23" ><span class="el-switch-style"></span></label></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">No of Years</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>'+
            '<td>' + actions + '</td>' +
        '</tr>';
        $("#range_table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add-range").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_23" value="cb_opt_val_23" ><span class="el-switch-style"></span></label></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Date Range with recurring time</option><option data-src="assets/images/date-picker.png" >Time Range (All Week)</option></select></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >January</option><option data-src="assets/images/date-picker.png" >March</option></select></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >January</option><option data-src="assets/images/date-picker.png" >March</option></select></td>' +
            '<td><input type="number" class="form-control" name="name" placeholder="Priority" id="pickup-location-add1"></td>'+
            '<td>' + actions + '</td>' +
        '</tr>';
        $("#add-range-table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    
    $(".add_new_time_slot").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_23" value="cb_opt_val_23" ><span class="el-switch-style"></span></label></td>' +
            '<td><select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select></td>' +
            '<td><input type="text" class="form-control" name="name" placeholder="HH:MM" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control" name="name" placeholder="HH:MM" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control" name="name" placeholder="M.boo" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control" name="name" placeholder="Price" id="pickup-location-add1"></td>'+
            '<td><input type="text" class="form-control" name="name" placeholder="Note goes here" id="pickup-location-add1"></td>'+
            '<td>' + actions + '</td>' +
        '</tr>';
        $("#add_new_time_slot_table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
    });
    

    $('#enable_person_type').change(function(){
        if($(this).prop('checked')){
            $('#enable_person_type_div').removeClass('d-none');
        }else{
            $('#enable_person_type_div').addClass('d-none');
        }
    })
    
    $('#enable_partial_payment').change(function(){
        
        if($(this).prop('checked')){
            $('.partial_payment_div').removeClass('d-none');
        }else{
            $('.partial_payment_div').addClass('d-none');
        }
    })
    
    $('#enable_seasonal_price').change(function(){
        
        if($(this).prop('checked')){
            $('#enable_seasonal_price_div').removeClass('d-none');
        }else{
            $('#enable_seasonal_price_div').addClass('d-none');
        }
    })
    
    $('#avalibility_by_date').change(function(){
        
        if($(this).prop('checked')){
            $('#avalibility_by_date_div').removeClass('d-none');
        }else{
            $('#avalibility_by_date_div').addClass('d-none');
        }
    })
    
    $('#manage_time_avalibility').change(function(){
        
        if($(this).prop('checked')){
            $('#manage_time_avalibility_div').removeClass('d-none');
        }else{
            $('#manage_time_avalibility_div').addClass('d-none');
        }
    })
    
    $('#enable_seasonal_pricinig').change(function(){
        
        if($(this).prop('checked')){
            $('#enable_seasonal_pricinig_div').removeClass('d-none');
        }else{
            $('#enable_seasonal_pricinig_div').addClass('d-none');
        }
    })
    
    $('#enable_holiday').change(function(){
        
        if($(this).prop('checked')){
            $('#enable_holiday_div').removeClass('d-none');
        }else{
            $('#enable_holiday_div').addClass('d-none');
        }
    })

    // Calander Appearance : Change calander image based on select option 
    $("#searchresults").change(function() {
        var $sel = $(this);
        var task = $sel.val();
        var src = $sel.find(':selected').attr('data-src');
        $(".cal-theme-image img").attr('src', src );
      });

    // Change Color Script
    $(".holiday-color").change(function(){
        var $mycolor = $(this);
        var mycolor1 = $mycolor.val();
        $('span.holiday-color').text(mycolor1);

    }) 
    $(".booked-color").change(function(){
        var $mycolor = $(this);
        var mycolor1 = $mycolor.val();
        $('span.booked-color').text(mycolor1);

    }) 
    $(".cut-off-color").change(function(){
        var $mycolor = $(this);
        var mycolor1 = $mycolor.val();
        $('span.cut-off-color').text(mycolor1);

    }) 
    $(".available-color").change(function(){
        var $mycolor = $(this);
        var mycolor1 = $mycolor.val();
        $('span.available-color').text(mycolor1);

    }) 

    // Add new div based row : Ind Time Slote
    $(".add-div-time-slote").click(function(){
        var addrow = $("div.ind-time-slote div").html();
        $('.ind-time-slote').append(addrow);
    }); 

    // Add new div based row : Bloc Time Slote
    $(".add-bulk-time-slote").click(function(){
        var addrow = $("div.bulk-time-slote div").html();
        $('.bulk-time-slote').append(addrow);
    });

    // Add new div based row : Additional Charges
    $(".add-chrgs-number-days").click(function(){
        var addrow = $("div.add_charg_row div").html();
        $('.add_charg_row').last().append(addrow);
    }); 
    
    // add row on add button click
    $(document).on("click", ".add", function(){
        var empty = false;
        var input = $(this).parents("tr").find('input[type="date"],input[type="time"], input[type="number"], input[type="text"], select,textarea');
            console.log(input);
            

        input.each(function(){
            console.log($(this).val());
            if(!$(this).val()){
                // return false;
                $(this).add_del_schClass("error");
                empty = true;
            } else{
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        
        if(!empty){
        
            $(".add").hide();
            $(".edit").show();
            $(".weekdays-sch-edit").show();         // Enable Edit button on Weekday schedule
            $(".time-slote-edit").show();           // Enable Edit button on Time Slot
            $(".delivery_days_table_edit").show();  // Enable Edit button on delivery schedule page
            $(".globle-holidy-edit").show(); 
            $(".add-on-edit").show(); 
            $(".block-pricing-edit").show(); 
            $(".bulk-booking-edit").show(); 
            $(".person-edit").show(); 
            $(".resource-edit").show(); 
            $(".seasonal-pricing-edit").show(); 
            $(".new-resource-edit").show(); 
            $(".edit-range").show(); 
            $(".range-edit").show(); 
            $(".template-edit").show(); 
            $(".sms-notification-edit").show(); 


            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
            input.each(function(){
                $(this).parent("td").html($(this).val());
            });	
            $(this).parents("tr").find(".add, .edit").toggle();
        } 	
    });
    //Add Row for Weekdays

    //Add new record 
    $(document).on("click", ".add-new", function(){
        var empty = false;
        var input = $(this).parents("tr").find('input[type="date"],input[type="time"], input[type="number"], input[type="text"], select,textarea');
        input.each(function(){
            if(!$(this).val()){
                $(this).add_del_schClass("error");
                empty = true;
            } else{
                $(this).removeClass("error");
            }
        });
        
        $(this).parents("tr").find(".error").first().focus();
        if(!empty){
            input.each(function(){
                $(this).parent("td").html($(this).val());
            });	
            
             $(this).parents("tr").find(".add_del_sch, .edit_del_sch").toggle();
           // $(".add-new").removeAttr("disabled");
            $(this).parents("tr").find(".add-new, #action-edit").toggle();
            $(".action-disable").show();
        }		
    });

    /* Clone Rows */
    $(".Duplicate").click(function() {
        $(this).parents("table tr.cloned-row").clone().insertAfter(".alt-in-tbl");
        $(".tbl-delivery-schedule tbody tr:first").addClass('remove-delete');
        $(".tbl-delivery-schedule .delete").show();
        $("table tr td:first-child .el-switch-green").show();
    });

    // Show / Hide Section using Checkbox  
    $('#sdw_delivery_week').click(function(){
        if(this.checked)
            $('.tbl-responsive-sm').show();
        else
            $('.tbl-responsive-sm').hide();
    });

    // Select all check box
    $(".ckbCheckAll").click(function () {
        $(".checkBoxClass").prop('checked', $(this).prop('checked'));
    });

    // Unchecked box to disable field
    $(".checkBoxClass").change(function(){
        if(!this.checked) {
            $(this).parents("tr").addClass("disable-row"); 
        } else {
            $(this).parents("tr").removeClass("disable-row"); 
        }
    })
        
});
// End: Documen.Redy 


// Edit: Weekeday -> Weekday Based Schedule -> Trageted field 
$(document).on("click", ".weekdays-sch-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<select class="ib-sm" name="weekday" id="weekday"><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday </option><option value="Thursday">Thursday</option><option value="Friday">Friday </option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option></select>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<input type="text" class="form-control" id="min-time" name="holiday-name" placeholder="00:00 AM" id="time-slote" value="01:01 AM">');
    });
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<input type="text" class="form-control" id="min-time" name="holiday-name" placeholder="01:01 AM" id="time-slote" value="02:02 AM">');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select class="ib-sm" name="weekday" id="weekday"><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday </option><option value="Thursday">Thursday</option><option value="Friday">Friday </option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option></select>');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<select class="ib-sm" name="weekday" id="weekday"><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday </option><option value="Thursday">Thursday</option><option value="Friday">Friday </option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option></select>');
    });
    $(this).parents("tr").find("td:eq(5)").each(function(){
        $(this).html('<input type="number" class="form-control" id="min-time" name="holiday-name" placeholder="Delivery Charges" id="time-slote" value="Delivery Charges">');
    });
    $(this).parents("tr").find(".weekdays-sch-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});


$(document).on("click", ".template-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        // $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<select class="ib-sm" name="weekday" id="weekday"><option value="Coupons">Coupons</option><option value="Product Tags">Product Tags</option><option value="Payments Gateways ">Payments Gateways </option>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select class="ib-sm" name="weekday" id="weekday"><option value="Includes any of">Includes any of</option><option value="Excludes any of">Excludes any of</option><option value="Equal to">Equal to </option></select>');
    });
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select class="ib-sm" name="weekday" id="weekday"><option value="Search for a Coupon...">Search for a Coupon...</option><option value="Products Category">Products Category</option><option value="Search for a Cart Status...">Search for a Cart Status... </option></select>');
    });
    $(this).parents("tr").find(".template-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});




// Edit: Time Slot -> Time Slot Field -> Trageted field 
$(document).on("click", ".time-slote-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" class="checkBoxClass" id="cb_opt_nm_19" value="cb_opt_val_19" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_19"></label></div>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<input type="text" class="form-control" value="02-07-2021"></input>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<input type="text" name="min-time"  class="form-control" value="9:00 AM - 10:00AM"></input>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Time Slot" id="time-slote" value="3">');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<input type="number" class="form-control" name="holiday-name" placeholder="$" value="$20" id="time-slote" value="$2">');
    });
    $(this).parents("tr").find("td:eq(5)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Delivery Charges" id="time-slote" value="Delivery Charges">');
    });
    $(this).parents("tr").find(".time-slote-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".availibility-time-slote-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<label class="el-switch el-switch-green"><input type="checkbox" name="" value="cb_opt_val_23" checked=""><span class="el-switch-style"></span></label>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<input type="text" name="min-time" class="form-control" value="9:00 AM - 10:00AM"></input>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Time Slot" id="time-slote" value="3">');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<input type="number" class="form-control" name="holiday-name" placeholder="$" value="$20" id="time-slote" value="$2">');
    });
    $(this).parents("tr").find("td:eq(5)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Delivery Charges" id="time-slote" value="Delivery Charges">');
    });
    $(this).parents("tr").find(".time-slote-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".resource-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">vnghg ‐ #1134</option><option data-src="assets/images/date-picker.png" >vnghg ‐ #1134</option><option data-src="assets/images/date-picker.png" >vnghg ‐ #1134</option></select>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Delivery Charges" id="time-slote" value="$ 280">');
    });
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<a href="">View Resource</a>');
    });
    $(this).parents("tr").find(".resource-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".bulk-booking-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        // $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    }); 
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Day</option><option data-src="assets/images/date-picker.png" >Date</option>');
    });   
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<input type="date" class="form-control" name="holiday-name" value="' + $(this).text() + '" id="time-slote">');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Add</option><option data-src="assets/images/date-picker.png" >Substract</option>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<input type="time" class="form-control" name="holiday-name" value="' + $(this).text() + '" id="time-slote">');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<input type="time" class="form-control" name="holiday-name" value="' + $(this).text() + '" id="time-slote">');
    });
    $(this).parents("tr").find("td:eq(5)").each(function(){
        $(this).html('<input type="number" class="form-control" name="holiday-name" placeholder="Max. Booking" id="time-slote" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find("td:eq(6)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="$" value="' + $(this).text() + '" id="time-slote">');
    });
    $(this).parents("tr").find("td:eq(7)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Delivery Charges" id="time-slote" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".bulk-booking-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".seasonal-pricing-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    }); 
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">P. val</option><option data-src="assets/images/date-picker.png" >Date</option>');
    });   
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Sea. 2</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Administrator</option><option data-src="assets/images/date-picker.png" >Substract</option>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">14-04-2022</option><option data-src="assets/images/date-picker.png" >11:00</option><option data-src="assets/images/date-picker.png" >12:00</option></select>');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">14-04-2022</option><option data-src="assets/images/date-picker.png" >11:00</option><option data-src="assets/images/date-picker.png" >12:00</option></select>');
    });
    $(this).parents("tr").find("td:eq(5)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Add</option><option data-src="assets/images/date-picker.png" >11:00</option><option data-src="assets/images/date-picker.png" >12:00</option></select>');
    });
    $(this).parents("tr").find("td:eq(6)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="$" value="250" id="time-slote">');
    });
    $(this).parents("tr").find(".seasonal-pricing-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".person-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    }); 
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="" value="Regular Person" id="time-slote">');
    });   
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(7)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Description goes here." id="time-slote" value="Description goes here.">');
    });
    $(this).parents("tr").find(".person-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".edit-range", function(){    
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        // $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    }); 
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_23" value="' + $(this).val() + '"><span class="el-switch-style"></span></label>');
    });   
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">20</option><option data-src="assets/images/date-picker.png" >30</option><option data-src="assets/images/date-picker.png" >35</option></select>');
    });   
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<input type="number" class="form-control" name="holiday-name" placeholder="Priority" id="time-slote" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".edit-range, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

$(document).on("click", ".add-on-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">P. Person</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Season name" id="time-slote" value="season 2">');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Administrator</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });   
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<input type="date" class="form-control" name="holiday-name" id="time-slote" value="">');
    });   
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<input type="date" class="form-control" name="holiday-name" id="time-slote" value="">');
    });   
    $(this).parents("tr").find("td:eq(5)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Add</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });
    $(this).parents("tr").find("td:eq(6)").each(function(){
        $(this).html('<span>$</span> <input type="number" class="form-control" name="holiday-name" placeholder="Time Slot" id="time-slote" value="3">');
    });
    $(this).parents("tr").find(".add-on-edit, .add").toggle();
    $(".add_season_pricing").attr("disabled", "disabled");
});

$(document).on("click", ".new-resource-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<label class="el-switch el-switch-green"><input type="checkbox" name="cb_opt_nm_21" value="cb_opt_val_21" checked><span class="el-switch-style"></span></label>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select id="searchresults" required=""><option>Sunday</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option><option>Saturday</option></select>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select id="searchresults" required=""><option>09:45 AM</option><option>10:45 AM</option><option>11:45 AM</option><option>12:45 AM</option></select>');
    });   
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select id="searchresults" required=""><option>01:25 PM</option><option>02:25 PM</option><option>03:25 PM</option></select>');
    });   
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<select id="searchresults" required=""><option>02</option><option>03</option><option>04</option><option>05</option></select>');
    }); 
    $(this).parents("tr").find(".new-resource-edit, .add").toggle();
    $(".add_season_pricing").attr("disabled", "disabled");
});

$(document).on("click", ".block-pricing-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        console.log($(this).text());
        // $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        // console.log($(this));
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Block Name" id="time-slote" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        // console.log($(this));
        $(this).html('<input type="number" class="form-control" name="holiday-name" placeholder="Days" id="time-slote" value="' + $(this).text() + '">');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        // console.log($(this));
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Sunday</option><option data-src="assets/images/date-picker.png" >Tuesday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });   
    $(this).parents("tr").find("td:eq(3)").each(function(){
        // console.log($(this));
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Sunday</option><option data-src="assets/images/date-picker.png" >Tuesday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });  
    $(this).parents("tr").find("td:eq(4)").each(function(){
        // console.log($(this));
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Time Slot" id="time-slote" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".block-pricing-edit, .add").toggle();
    $(".add_block").attr("disabled", "disabled");
});



$(document).on("click", ".range-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<label class="el-switch el-switch-green"><input type="checkbox" name="" value="cb_opt_val_23" checked=""><span class="el-switch-style"></span></label>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<select id="searchresults" required=""><option data-src="assets/images/date-picker.png" selected="">Select</option><option data-src="assets/images/date-picker.png" >Sunday</option><option data-src="assets/images/date-picker.png" >Monday</option></select>');
    });   
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<input type="date" class="form-control" name="holiday-name" value="14-04-2022" id="time-slote">');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<input type="date" class="form-control" name="holiday-name" value="14-04-2022" id="time-slote">');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<div class="rc-flx-wrap d-flex flx-aln-center"><div class="select-box mr-2"><select class="ib-small mr-1" name="min-time" id="date-from"><option>1</option><option>2</option><option>3</option></select></div><div class="select-box"><select class="ib-small mr-1" name="min-time" id="date-from"><option>$4</option><option>$5</option><option>$6</option></select></div></div>');
    });
    $(this).parents("tr").find(".range-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

// Edit: Holiday -> Use Global Holidays -> Trageted field 
$(document).on("click", ".globle-holidy-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" class="checkBoxClass" id="cb_opt_nm_19" value="cb_opt_val_19" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_19"></label></div>');
    });
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select class="ib-sm mr-1" name="min-time" id="date-from"><option value="Select Date">Select Date</option><option value="10-06-2021">10-06-2021</option><option value="11-06-2021">11-06-2021</option></select> To <select class="ib-sm ml-1" name="min-time" id="mintime"><option value="Select Date">Select Date</option><option value="01-10-2021">01-10-2021</option><option value="02-10-2021">02-10-2021</option></select>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select class="ib-sm mr-1" name="min-time" id="mintime"><option value="Select Holiday Type">Select Holiday Type</option><option value="Current Year Only">Current Year Only</option><option value="Current Year Only">Current Year Only</option></select>');
    });
    $(this).parents("tr").find(".globle-holidy-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});


// Edit: OnBoard -> Set Time Slot
$(document).on("click", ".edit-time-slote-onb4", function(){        
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" id="cb_opt_nm_20" value="cb_opt_val_20" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_20"></label> <span><input type="date" class="form-control w-50 ml-1" name="holiday-name" placeholder="Enter Holiday" id="date-slote"></span></div>');
    });
    $(this).parents("tr").find("td:eq(1)").each(function(){
        $(this).html('<input type="time" class="form-control" name="holiday-name" placeholder="Enter Holiday" id="time-slote">');
    });
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select class="ib-sm" name="min-time" id="mintime"><option value="1">1</option><option value="2">2</option><option value="3">3 </option><option value="4">4</option><option value="5">5 </option><option value="6">6</option><option value="7">7</option></select>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<input type="number" class="form-control" name="holiday-name" placeholder="$" id="add-charge">');
    });
    $(this).parents("tr").find("td:eq(4)").each(function(){
        $(this).html('<input type="text" class="form-control" name="holiday-name" placeholder="Delivery Label" id="add-charge">');
    });
    $(this).parents("tr").find(".edit-time-slote-onb4, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});


// Edit row on edit button Event for Delivery Days & Specific Delivery
$(document).on("click", ".delivery_days_table_edit", function(){   

    $(this).parents("#delivery_days_table tr").find("td:not(:first-child, :last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });  
    
    $(this).parents("tr").find(".delivery_days_table_edit, .add").toggle();
  //  $(this).parents("tr").find(".disable, .cancle").toggle();
    $(".add-new").attr("disabled", "disabled");
});


// Edit row on edit button click
$(document).on("click", ".edit", function(){   
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
       $(".disable").show();
    });  
    $(this).parents("tr").find(".edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});

// Delete row on delete button click
$(document).on("click", ".delete", function(){
    $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
});

// Delete div based row on delete button click
$(document).on("click", ".link-del", function(){
    $(this).parents("div.rb1-row").remove();
});

// Disable row 
$(".enable").hide(); 
$(".action-disable").hide();
$(document).on("click", ".disable", function(){
    $(this).parents("tr").addClass("disable-row"); 
    $(this).parents("tr").find(".disable, .enable").toggle();
});
// Disable row 
$(document).on("click", ".enable", function(){
    $(this).parents("tr").removeClass("disable-row"); 
    $(this).parents("tr").find(".enable, .disable").toggle();
});


/* Show All Accordian */
jQuery('#cds-show-all').on('click', function () {
    jQuery('#accordion .panel-collapse').collapse('toggle');
});

/* Toggle sections with input[type="radio"] */
function myfunction() 
{    $("#acds_pc_div").show(); }

$(document).ready(function(){

// Default open the Shipping Methods Options 
    $('#shiping-method').click(function(){
       $(".rb_opt" ).show();
       $(".pick-loc-pro-cat").hide();       // Disable pickup location product category 
       $(".pro-cat-shiping-method").hide(); // Disable product category shiping method field
       
       $(".rb_opt_val_2" ).hide();
       $(".rb_opt_val_3" ).hide();
     //  console.log("Amit");
      // $(".edit-delvry-sche").hide();
       $(".disable-field").hide();
     // $(".DCO_calendar").hide();
       $(".DCO_text_block").hide();
       $(".ind_tm_slote_spec_date").hide();
       $(".bulk_tm_slote_spec_date").hide();
    });
    
// Default open the Calendar Options 
$('#DCO_calendar').click(function(){
    $(".DCO_calendar" ).show();  
    $(".DCO_text_block" ).hide();
 });
 $('#DCO_text_block').click(function(){
    $(".DCO_calendar" ).hide();  
    $(".DCO_text_block" ).show();
 });

 $('#time_slot_3_1').click(function(){
    $(".ind_tm_slote_weekday" ).show();  
    $(".ind_tm_slote_spec_date" ).hide();
 });
 $('#time_slot_3_2').click(function(){
    $(".ind_tm_slote_weekday" ).hide();  
    $(".ind_tm_slote_spec_date" ).show();
 });

 $('#bulk_time_slot_5_1').click(function(){
    $(".bulk_tm_slote_weekday" ).show();  
    $(".bulk_tm_slote_spec_date" ).hide();
 });
 $('#bulk_time_slot_5_2').click(function(){
    $(".bulk_tm_slote_weekday" ).hide();  
    $(".bulk_tm_slote_spec_date" ).show();
 });

    // Google calander Sync: Open Accordian based on selected options 
    $('.google-calendar-sync input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".rb_opt").not(targetBox).hide();
        $(targetBox).show();
    });

// Only Enable selected section options
    $('input[name="rb_opt_nm"]').on('change', function() {
        if ($(this).val()=='rb_opt_val_2') {
           $(".pro-cat-shiping-method").show(); // enable product category shiping method field
           $(".pick-loc-pro-cat").hide(); // Disable pickup location product category 
           $('select[name="pro-ib-md"]').attr('disabled',false) 
           $('input[name="sel-ib-md"]').attr('disabled',true)
           $('select[name="pick-ib-md"]').attr('disabled', true)

//  console.log("hi Amit");
        } else if ($(this).val()=='rb_opt_val_3') {
            $(".pro-cat-shiping-method").hide();
            $(".pick-loc-pro-cat").show();
            
            $('select[name="pro-ib-md"]').attr('disabled', true)
            $('select[name="pick-ib-md"]').attr('disabled', false)
            $('input[name="sel-ib-md"]').attr('disabled',true)

        } else if ($(this).val()=='rb_opt_val_1') {
            $(".pro-cat-shiping-method").hide(); // Disable product category shiping method field
            $(".pick-loc-pro-cat").hide(); // Disable pickup location product category 
            $('select[name="pro-ib-md"]').attr('disabled', true)
            $('select[name="pick-ib-md"]').attr('disabled', true)
        }
      });

});

/* Toggle sections with input[type="checkbox"] */
$(document).ready(function(){
   $('input[type="checkbox"]').click(function(){
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });
});

/* Bootstrap Tooltip */
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

/* Toggle sections with input[type="radio"] */
$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(':checked'))
        {
            $('#save').prop('disabled', false);
        }
        else
        {
            $('#save').prop('disabled', true);
        }
    });
});

// Multiple select field
$(document).ready(function(){
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {removeItemButton: true, maxItemCount:5, searchResultLimit:6, renderChoiceLimit:6  });
});

function displayDivDemo(id, elementValue) {
    document.getElementById(id).style.display = elementValue.value == 1 ? 'block' : 'none';
 }

$("#add-buy-box").change(function(){
    var box_value = $("#add-buy-box").val();
    console.log(box_value);
    if(box_value == 1){
        $('#panel-add-cart-div').removeClass('d-none');
        $('#panel-by-now-div').addClass('d-none');
    }else{
        $('#panel-by-now-div').removeClass('d-none');
        $('#panel-add-cart-div').addClass('d-none');
    }
});