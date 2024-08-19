let RegularSchedule = {
    Templates: {}, Mapping: {}, Request: {}, Filter: null, DivisionId: 0, ClientId: 0, StaffTypeId: 0, StaffId: 0, QualificationId: 0, RegularScheduleType: 0, Sort: null, Timer: null
};
RegularSchedule.Mapping = {
    Urls: {
        'divisions': 'views/ddl.ashx?t=Divisions',
        'clients': 'views/ddlClients.ashx?',
        'homelocations': 'views/ddlClients.ashx?',
        'stafftypes': 'views/ddl.ashx?t=StaffTypes',
        'staff': 'views/staffddl.ashx?t=Staff',
        'qualifications': 'views/ddlQualifications.ashx?',
        'regularscheduletype': 'views/ddl.ashx?t=RegularScheduleTypes',
        'starttime': 'views/hours.ashx?',
        'endtime': 'views/hours.ashx?',
        'selectstafftype': 'views/ddl.ashx?t=StaffTypes',
        'sort': 'views/ddl.ashx?t=PersonnelSortTypes'
    },
    Search: {
        'divisions': false,
        'clients': true,
        'homelocations': true,
        'stafftypes': true,
        'staff': true,
        'qualifications': true,
        'regularscheduletype': false,
        'starttime': true,
        'endtime': true,
        'selectstafftype': true,
        'sort': false
    },
    All: {
        'divisions': '<div class="listitem" value="0" onclick="SelectItem($(this));" table="Divisions">' + $('#hfDivisionsAlias').val() + '</div>',
        'clients': '',
        'homelocations': '',
        'stafftypes': '<div class="listitem" value="0" onclick="SelectItem($(this));" table="StaffTypes">' + $('#hfStaffTypesAlias').val() + '</div>',
        'staff': '<div class="listitem" value="0" onclick="SelectItem($(this));" table="Staff" text="' + $('#hfStaffAlias').val() + '">' + $('#hfStaffAlias').val() + '</div>',
        'qualifications': '<div class="listitem" value="0" onclick="SelectItem($(this));" table="Qualifications">All Qualifications</div>',
        'regularscheduletype': '<div class="listitem" value="0" onclick="SelectItem($(this));">All Schedule Types</div>',
        'selectstafftype': '',
        'starttime': '',
        'endtime': '',
        'sort': ''
    }
};

$(function () {
    RegularSchedule.LoadPopUp();
});

RegularSchedule.Init = function () {
    RegularSchedule.DateFrom = moment($('#hfPayStart').val(), 'DD/MM/YYYY');
    RegularSchedule.DateTo = moment($('#hfPayStart').val(), 'DD/MM/YYYY').add('days', 13);
    $('[data-main="RegularSchedule"]').unbind('click').bind('click', function () {
        $('#rightClick').hide();
    });
    $('[data-bind="calendardatefrom"]').text(RegularSchedule.DateFrom.format('DD/MM/YYYY'));
    $('[data-bind="calendardateto"]').text(RegularSchedule.DateTo.format('DD/MM/YYYY'));
    RegularSchedule.SetTemplates();
    $('[data-filter]').unbind('click').bind('click', RegularSchedule.SuggestClick);
    $('[data-icon-filter]').unbind('click').bind('click', RegularSchedule.SuggestIconClick);
    $('[data-filter]').unbind('keyup').bind('keyup', RegularSchedule.SuggestKeyUp);
    $('[data-action="customrequirements"]').bind('click', RegularSchedule.OpenCustomRequirements);
    $('[data-action="Set"]').unbind('click').bind('click', RegularSchedule.Set);
    $('[data-action="next"]').unbind('click').bind('click', RegularSchedule.Next);
    $('[data-action="previous"]').unbind('click').bind('click', RegularSchedule.Previous);
    $('[data-action="duration"],[data-filter="starttime"]').bind('keyup', RegularSchedule.CalculateEnd);
    $('[data-filter="endtime"]').bind('keyup', RegularSchedule.CalculateStart);
    $('[data-action="setavailableonly"]').unbind('click').bind('click', RegularSchedule.SetAvailableOnly);
    console.debug('Loading...');
    RegularSchedule.ParseUrl();
    $(window).on('resize', function () {
        if ($('.divSchedulerSidebar').is(':visible') && $(window).width() > 1420)
            $('.shiftsView').width($(window).width() - $('.divSchedulerSidebar').width() - 65);
    });
};

RegularSchedule.SetTemplates = function () {
    RegularSchedule.Templates.SchedulePersonnel = $('[data-template="personnel-item"]');
    RegularSchedule.Templates.ScheduleHours = $('[data-template="personnel-hours-item"]');
    RegularSchedule.Templates.ScheduleDay = $('[data-template="scheduler-day"]');
    RegularSchedule.Templates.ScheduleRow = $('[data-template="scheduler-shifts-row"]');
    RegularSchedule.Templates.ScheduleItem = $('[data-template="scheduler-shift-item"]');
    RegularSchedule.Templates.ScheduleShift = $('[data-template="shift"]');
    $('[data-templates]').remove();
};

RegularSchedule.LoadPopUp = function () {
    var url = 'views/dialog/homeLocation.aspx';
    ShowLoader();
    $.post(url, function (data) {
        {
            LoadPopUp(data);
            RegularSchedule.Init();
            HideLoader();
        }
    }, "html");
};

//#region Filters 
RegularSchedule.SuggestIconClick = function () {
    let tb = $('[data-filter="' + $(this).attr('data-icon-filter') + '"]');
    RegularSchedule.Filter = $(this).attr('data-icon-filter');
    let div = $('[data-div-filter="' + RegularSchedule.Filter + '"]');
    if ($(div).is(':visible')) {
        $(div).html('');
        $(div).hide();
    }
    else {
        RegularSchedule.LoadSuggest(tb, div, false);
    }
    return false;
};
RegularSchedule.SuggestClick = function () {
    let tb = $(this);
    RegularSchedule.Filter = $(this).attr('data-filter');
    let div = $('[data-div-filter="' + RegularSchedule.Filter + '"]');
    if (!RegularSchedule.Mapping.Search[tb.attr('data-filter')])
        $(tb).blur();
    if ($(div).is(':visible')) {
        $(div).html('');
        $(div).hide();
    }
    else {
        RegularSchedule.LoadSuggest(tb, div, false);
    }
};
RegularSchedule.SuggestKeyUp = function () {
    clearTimeout(RegularSchedule.Timer);
    let tb = $(this);
    RegularSchedule.Filter = $(this).attr('data-filter');
    let div = $('[data-div-filter="' + RegularSchedule.Filter + '"]');
    RegularSchedule.Timer = setTimeout(function () {
        RegularSchedule.LoadSuggest(tb, div, true);
    }, 500);
};

RegularSchedule.LoadSuggest = function (tb, div, suggest) {
    $('.ddl').hide();
    let search = RegularSchedule.Mapping.Search[tb.attr('data-filter')];
    let url = RegularSchedule.Mapping.Urls[tb.attr('data-filter')] + (suggest && search ? '&search=' + tb.val() : '');
    if (tb.attr('data-filter') === 'starttime' || tb.attr('data-filter') === 'endtime')
        url = RegularSchedule.Mapping.Urls[tb.attr('data-filter')] + (suggest && search ? '&s=' + tb.val() : '');
    if (tb.attr('data-filter') === 'clients' && RegularSchedule.DivisionId !== 0)
        url += '&division=' + RegularSchedule.DivisionId;
    if (tb.attr('data-filter') === 'selectstafftype')
        url += '&staff=' + RegularSchedule.Request.StaffId;
    if (search && !suggest)
        $(tb).select();
    ShowLoader();
    $.post(url, function (data) {
        {
            var all = RegularSchedule.Mapping.All[tb.attr('data-filter')];
            $(div).html(all + data);
            $(div).show();
            HideLoader();
        }
    }, "html");
};

function SelectItem(item) {
    let tb = $('[data-filter="' + RegularSchedule.Filter + '"]');
    let div = $('[data-div-filter="' + RegularSchedule.Filter + '"]');
    $(tb).val(item.html().length > 30 ? item.html().substr(0, 29) + '...' : item.html());
    $(div).html('').hide();
    switch (RegularSchedule.Filter) {
        case 'divisions':
            RegularSchedule.DivisionId = item.attr('value');
            break;
        case 'clients':
            RegularSchedule.ClientId = item.attr('value');
            RegularSchedule.Load();
            break;
        case 'homelocations':
            RegularSchedule.ClientId = item.attr('value');
            $('[data-filter="clients"]').val($(tb).val());
            RegularSchedule.Load();
            break;
        case 'stafftypes':
            RegularSchedule.StaffTypeId = item.attr('value');
            RegularSchedule.Load();
            break;
        case 'staff':
            $(tb).val(item.attr('text'));
            RegularSchedule.StaffId = item.attr('value');
            RegularSchedule.Load();
            break;
        case 'qualifications':
            RegularSchedule.QualificationId = item.attr('value');
            RegularSchedule.Load();
            break;
        case 'regularscheduletype':
            RegularSchedule.RegularScheduleType = item.attr('value');
            RegularSchedule.Load();
            break;
        case 'sort':
            RegularSchedule.Sort = item.attr('value');
            RegularSchedule.Load();
            break;
        case 'selectstafftype':
            RegularSchedule.Request.StaffTypeId = item.attr('value');
            break;
        case 'starttime':
            $('#tbTimeStartNew').val(item.attr('value'));
            RegularSchedule.CalculateEnd();
            break;
        case 'endtime':
            $('#tbTimeEndNew').val(item.attr('value'));
            RegularSchedule.CalculateStart();
    }
}

//#endregion

//#region Calendar
let serverDateFormat = 'MM/DD/YYYY HH:mm';
let serverDateShortFormat = 'MM/DD/YYYY';
RegularSchedule.SetUrl = function (filters) {
    let index = window.location.href.indexOf('#');
    let url = index === -1 ? window.location.href : window.location.href.substring(0, index);
    //if (index !== -1)
    //    window.history.back();
    url += '#Datefrom=' + RegularSchedule.DateFrom.format(serverDateFormat) + '&DateTo=' + RegularSchedule.DateTo.format(serverDateFormat);
    if (filters.DivisionId !== 0)
        url += '&DivisionId=' + filters.DivisionId;
    if (filters.ClientId !== 0)
        url += '&ClientId=' + filters.ClientId;
    if (filters.StaffTypeId !== 0)
        url += '&StaffTypeId=' + filters.StaffTypeId;
    if (filters.StaffId !== 0)
        url += '&StaffId=' + filters.StaffId;
    if (filters.QualificationId !== 0)
        url += '&QualificationId=' + filters.QualificationId;
    if (filters.ScheduleType !== 0)
        url += '&ScheduleType=' + filters.ScheduleType;
    if (filters.Sort !== null)
        url += '&Sort=' + filters.Sort;
    window.location = url;
};

RegularSchedule.ParseUrl = function () {
    let filters = {
        Datefrom: RegularSchedule.DateFrom.format(serverDateFormat),
        DateTo: RegularSchedule.DateTo.format(serverDateFormat),
        DivisionId: RegularSchedule.DivisionId,
        ClientId: RegularSchedule.ClientId,
        StaffTypeId: RegularSchedule.StaffTypeId,
        StaffId: RegularSchedule.StaffId,
        QualificationId: RegularSchedule.QualificationId,
        ScheduleType: RegularSchedule.RegularScheduleType,
        Sort: RegularSchedule.Sort
    };
    let hash = window.location.hash.replace('#', '').split('&');
    if (hash.length > 0) {
        for (let i = 0; i < hash.length; i++) {
            let key = hash[i].split('=')[0];
            let value = hash[i].split('=')[1];
            filters[key] = unescape(value);
            if (key !== 'DateFrom' && key !== 'Datefrom' && key !== 'DateTo')
                RegularSchedule[key] = unescape(value);
        }
        RegularSchedule.Load(filters);
    }
};
RegularSchedule.Load = function (filters, personnel) {
    ShowLoader();
    $('[data-bind="calendardatefrom"]').text(RegularSchedule.DateFrom.format('DD/MM/YYYY'));
    $('[data-bind="calendardateto"]').text(RegularSchedule.DateTo.format('DD/MM/YYYY'));
    if (filters === undefined)
        filters = {
            Datefrom: RegularSchedule.DateFrom.format(serverDateFormat),
            DateTo: RegularSchedule.DateTo.format(serverDateFormat),
            DivisionId: RegularSchedule.DivisionId,
            ClientId: RegularSchedule.ClientId,
            StaffTypeId: RegularSchedule.StaffTypeId,
            StaffId: RegularSchedule.StaffId,
            QualificationId: RegularSchedule.QualificationId,
            ScheduleType: RegularSchedule.RegularScheduleType,
            Sort: RegularSchedule.Sort
        };
    if (filters.ClientId !== 0) {
        $.post('/regularschedule/load', JSON.stringify(filters), function (response) {
            $('.PopUp').hide();
            let data = response.Rows;
            RegularSchedule.CustomRequirements = response.CustomRequirements !== null && response.CustomRequirements !== '' ? response.CustomRequirements + ',' : ',';
            $('#hfCustomRequirements').val(RegularSchedule.CustomRequirements);
            $('[data-container]').empty();
            $('#divPersonnelList').hide();
            if (data.length > 0) {
                for (let i = 0; i < data[0].Days.length; i++) {
                    let day = RegularSchedule.Templates.ScheduleDay.clone();
                    day.find('[data-bind="date"]').text(moment(data[0].Days[i].Date).format('ddd, MMM DD'));
                    day.find('[data-bind="daycount"]').attr('data-datepattern', moment(data[0].Days[i].Date).format(serverDateShortFormat));
                    $('[data-container="scheduler-days"]').append(day);
                }
                for (let i = 0; i < data.length; i++) {
                    let personnel = RegularSchedule.Templates.SchedulePersonnel.clone();
                    let hours = RegularSchedule.Templates.ScheduleHours.clone();
                    let row = RegularSchedule.Templates.ScheduleRow.clone();
                    let rowEdit = RegularSchedule.Templates.ScheduleRow.clone();
                    personnel.find('[data-bind="personnelfullname"]').attr('data-id', data[i].StaffId).text(data[i].StaffName);
                    personnel.find('[data-action="edit"]').attr('data-id', data[i].StaffId);
                    personnel.find('[data-action="close"]').attr('data-id', data[i].StaffId);
                    hours.find('[data-bind="hours"]').text(data[i].Hours.toFixed(2));
                    hours.find('[data-bind="oncallhours"]').text(data[i].OnCallHours.toFixed(2));
                    for (let j = 0; j < data[i].Days.length; j++) {
                        let item = RegularSchedule.Templates.ScheduleItem.clone();
                        let itemEdit = RegularSchedule.Templates.ScheduleItem.clone();
                        item.find('[data-container="shift"]').attr('data-date', moment(data[i].Days[j].Date).format(serverDateShortFormat));
                        itemEdit.find('[data-container="shift"]').attr('data-date', moment(data[i].Days[j].Date).format(serverDateShortFormat));
                        if (data[i].Days[j].Items === null) {
                            item.html('');
                            itemEdit.find('[data-container="shift"]').attr('data-allowedit', 'true').unbind('click').bind('click', RegularSchedule.SelectItem);
                        }
                        else {
                            itemEdit.find('[data-container="shift"]').addClass('active');
                            item.find('[data-container="shift"]').addClass('active');
                            for (let k = 0; k < data[i].Days[j].Items.length; k++) {
                                let shift = RegularSchedule.Templates.ScheduleShift.clone();
                                let shiftEdit = RegularSchedule.Templates.ScheduleShift.clone();
                                if (data[i].Days[j].Items[k].Available === false) {
                                    itemEdit.find('[data-container="shift"]').attr('data-availabilityid', data[i].Days[j].Items[k].ShiftId).removeClass('active').addClass('notavailable');
                                    item.find('[data-container="shift"]').attr('data-availabilityview', data[i].Days[j].Items[k].ShiftId).removeClass('active').addClass('notavailable');
                                    shift.text(data[i].Days[j].Items[k].Title);
                                    shiftEdit.text(data[i].Days[j].Items[k].Title);
                                }
                                else {
                                    if (data[i].Days[j].Items[k].Available === true) {
                                        itemEdit.find('[data-container="shift"]').attr('data-availabilityid', data[i].Days[j].Items[k].ShiftId).removeClass('active').addClass('available');
                                        item.find('[data-container="shift"]').attr('data-availabilityview', data[i].Days[j].Items[k].ShiftId).removeClass('active').addClass('available');
                                    }
                                    else {
                                        shiftEdit.attr('data-shiftpreview', moment(data[i].Days[j].Items[k].From).format(serverDateShortFormat)).attr('data-shiftday', moment(data[i].Days[j].Items[k].From).format(serverDateShortFormat)).attr('data-id', data[i].Days[j].Items[k].ShiftId);
                                        shift.attr('data-shiftpreview', moment(data[i].Days[j].Items[k].From).format(serverDateShortFormat)).attr('data-id', data[i].Days[j].Items[k].ShiftId);
                                        if (!data[i].Days[j].Items[k].Home)
                                            shift.attr('data-home', false).attr('style', 'color:#000;font-style:italic;');
                                    }
                                    shift.text(moment(data[i].Days[j].Items[k].From).format('HH:mm') + ' - ' + moment(data[i].Days[j].Items[k].To).format('HH:mm'));
                                    shiftEdit.text(moment(data[i].Days[j].Items[k].From).format('HH:mm') + ' - ' + moment(data[i].Days[j].Items[k].To).format('HH:mm'));
                                }
                                item.find('[data-container="shift"]').append(shift);
                                itemEdit.find('[data-container="shift"]').append(shiftEdit);
                            }
                        }
                        row.append(item);
                        rowEdit.append(itemEdit);
                    }
                    $('[data-container="personnel-list"]').append(personnel);
                    $('[data-container="personnel-hours"]').append(hours);
                    $('[data-container="scheduler-shifts"]').append(row.attr('data-personnel', data[i].StaffId).attr('data-mode', 'view'));
                    $('[data-container="scheduler-shifts"]').append(rowEdit.attr('data-personnel', data[i].StaffId).attr('data-mode', 'edit'));
                }
                $('[data-bind="daycount"]').each(function () {
                    $(this).text('(' + $('[data-shiftday="' + $(this).attr('data-datepattern') + '"]:not([data-home="false"])').length + ')');
                });
                $('[data-mode="view"]').show();
                $('[data-mode="edit"]').hide();
                $('[data-action="edit"]').unbind('click').bind('click', RegularSchedule.EditRow);
                $('[data-action="close"]').unbind('click').bind('click', RegularSchedule.CloseRow);
                RegularSchedule.SetUnavailableRightClick();
                RegularSchedule.SetBookedRightClick();
                RegularSchedule.SetAvailabilityRightClick();
                $('#divPersonnelList').show();
                SetShiftEvents();
                if (personnel !== undefined)
                    RegularSchedule.EditRow(personnel);
                //RegularSchedule.SetUrl(filters);
                //$('.divRegularScheduleDaysHeader').stick_in_parent({ parent: $('.divRegularScheduleDays'), recalc_every: 1, offset_top: 125 });
            }
            HideLoader();
        });
    }
};
RegularSchedule.Next = function () {
    RegularSchedule.DateFrom = RegularSchedule.DateFrom.add('days', 14);
    RegularSchedule.DateTo = RegularSchedule.DateTo.add('days', 14);
    RegularSchedule.Load();
};
RegularSchedule.Previous = function () {
    //if (RegularSchedule.DateFrom > moment()) {
    RegularSchedule.DateFrom = RegularSchedule.DateFrom.add('days', -14);
    RegularSchedule.DateTo = RegularSchedule.DateTo.add('days', -14);
    RegularSchedule.Load();
    //}
};
RegularSchedule.EditRow = function (selectedPersonnel) {
    $('[data-mode="view"]').show();
    $('[data-mode="edit"]').hide();
    $('[data-action="setavailableonly"]').prop('checked', false);
    $('[data-type="booking"]').show();
    let personnelId = $(this).attr('data-id') !== undefined ? $(this).attr('data-id') : selectedPersonnel;
    $('[data-personnel="' + personnelId + '"][data-mode="view"]').hide();
    $('[data-personnel="' + personnelId + '"][data-mode="edit"]').show();
    $('[data-id="' + personnelId + '"][data-action="edit"]').hide();
    $('#divNewForm').toggle('slide', { direction: 'right' });
    $(this).hide();
    $('[data-id="' + personnelId + '"][data-action="close"]').show();
    RegularSchedule.Request = { Type: "Booking", StaffId: personnelId, PersonnelName: $('[data-id="' + personnelId + '"][data-bind="personnelfullname"]').text(), Dates: [] };
    $('[data-bind="personneledit"]').text(RegularSchedule.Request.PersonnelName);
    $('.shiftsView').width('auto');
    $('.shiftsView').width($('.shiftsView').width() - 305);
};
RegularSchedule.CloseRow = function () {
    if (RegularSchedule.Reload)
        RegularSchedule.Load();
    else {
        let personnelId = $(this).attr('data-id');
        $('[data-personnel="' + personnelId + '"][data-mode="view"]').show();
        $('[data-personnel="' + personnelId + '"][data-mode="edit"]').hide();
        $('#divNewForm').toggle('slide', { direction: 'right' });
        $(this).hide();
        $('[data-id="' + personnelId + '"][data-action="edit"]').show();
        RegularSchedule.ResetForm();
    }
    $('.shiftsView').width('auto');
};
RegularSchedule.SelectItem = function () {
    let ok = true;
    if (new Date($(this).attr('data-date')) < new Date && !$(this).hasClass('active')) {
        ok = confirm('Please note the start date is in the past would you like to continue?');
    }
    if (ok) {
        $(this).toggleClass('active');
        //if (RegularSchedule.Request.Type === "Booking")
        //    $(this).toggleClass('active');
        //else if (RegularSchedule.Request.Type === "Availability")
        //    $(this).toggleClass('available');
        RegularSchedule.Request.Dates = [];
        $('[data-personnel="' + RegularSchedule.Request.StaffId + '"][data-mode="edit"] [data-date]').each(function () {
            if (($(this).hasClass('active') || $(this).hasClass('available')) && $(this).attr('data-allowedit') === 'true') {
                RegularSchedule.Request.Dates.push($(this).attr('data-date'));
            }
        });
    }
};
RegularSchedule.Set = function () {
    if (RegularSchedule.Request.StaffId !== 0) {
        RegularSchedule.Request.From = moment(moment().format('DD/MM/YYYY') + ' ' + $('#tbTimeStartNew').val(), 'DD/MM/YYYY HH:mm').format('DD/MM/YYYY HH:mm');
        RegularSchedule.Request.To = moment(moment().format('DD/MM/YYYY') + ' ' + $('#tbTimeStartNew').val(), 'DD/MM/YYYY HH:mm').add('hours', $('#tbHours').val()).format('DD/MM/YYYY HH:mm');
        RegularSchedule.Request.ClientId = RegularSchedule.ClientId;
        RegularSchedule.Request.Requirements = $('#hfCustomRequirements').val();
        if (RegularSchedule.Request.Type === 'Availability' || RegularSchedule.Request.StaffTypeId !== undefined) {
            if (RegularSchedule.Request.Dates.length > 0) {
                let url = '/regularschedule/add';
                if (RegularSchedule.Request.Type === 'Availability')
                    url = '/regularschedule/available';
                $.post(url, JSON.stringify(RegularSchedule.Request), function (data) {
                    if (data.Success === true) {
                        RegularSchedule.Load(undefined, RegularSchedule.Request.StaffId);
                        RegularSchedule.ResetForm();
                        ShowNotification("<i class='icon-ok-sign'></i> Changes are successfully saved.", "greenNotification");
                    }
                    else {
                        if (data.Error === 'InvalidRange')
                            ShowNotification("<i class='icon-warning-sign'></i> Invalid date range.", "yellowNotification");
                        else
                        ShowNotification("<i class='icon-warning-sign'></i> Please select Personnel Type.", "yellowNotification");
                    }
                });
            }
            else {
                ShowNotification("<i class='icon-warning-sign'></i> You haven't selected any date.", "yellowNotification");
            }
        }
        else
            ShowNotification("<i class='icon-warning-sign'></i> Please select Personnel Type.", "yellowNotification");
    }
    return false;
};
RegularSchedule.Confirm = function () {
    $.post('/views/dialog/RegularScheduleWarning.aspx', function (data) {
        $('.popUpContent').html(data);
        $('.PopUp').show();
        $('body').attr('style', 'overflow: hidden');
        $('.popUpContent').find('[data-bind="personnel"]').text(RegularSchedule.Request.PersonnelName);
        $('.popUpContent').find('[data-bind="from"]').text(RegularSchedule.DateFrom.format('DD MMMM'));
        $('.popUpContent').find('[data-bind="to"]').text(RegularSchedule.DateTo.format('DD MMMM YYYY'));
    });
    return false;
};
RegularSchedule.ResetForm = function () {
    RegularSchedule.Request = {};
    $('[data-allowedit="true"]').removeClass('active');
    $('#hfCustomRequirements').val(RegularSchedule.CustomRequirements);
    $('[data-filter="selectstafftype"]').val('Select personnel type');
};

RegularSchedule.CalculateEnd = function () {
    let startDate = moment(moment().format('DD/MM/YYYY') + ' ' + $('#tbTimeStartNew').val(), 'DD/MM/YYYY HH:mm');
    let endDate = startDate.add('hours', $('#tbHours').val() * 1);
    $('#tbTimeEndNew').val(endDate.format('HH:mm'));
};
RegularSchedule.CalculateStart = function () {
    let startDate = moment(moment().format('DD/MM/YYYY') + ' ' + $('#tbTimeStartNew').val(), 'DD/MM/YYYY HH:mm');
    let endDate = moment(moment().format('DD/MM/YYYY') + ' ' + $('#tbTimeEndNew').val(), 'DD/MM/YYYY HH:mm');
    if (endDate < startDate)
        endDate.add('hours', 24);
    let duration = moment.duration(endDate.diff(startDate));
    $('#tbHours').val(duration.asHours());
};
RegularSchedule.OpenCustomRequirements = function () {
    if (RegularSchedule.Request.StaffTypeId !== undefined) {
        var url = "customRequirements.aspx?s=" + $('#hfCustomRequirements').val() + '&st=' + RegularSchedule.Request.StaffTypeId;
        ShowLoader();
        $.post(url, function (data) {
            {
                $('.popUpContent').html(data);
                $('.PopUp').show();
                HideLoader();
            }
        }, "html");
    }
    else
        ShowNotification("<i class='icon-warning-sign'></i> Please select Personnel Type.", "yellowNotification");
    return false;
};

//#endregion

//#region Unavailable

RegularSchedule.SetUnavailableRightClick = function () {
    $('[data-allowedit="true"]').unbind('contextmenu').bind("contextmenu", function (e) {
        RegularSchedule.UnavailableSlot = $(this);
        $('#rightClick').css({ 'left': (e.pageX - $(this).height()) + 'px', 'top': (e.pageY - $(this).width()) + 'px', 'position': 'absolute' });
        ShowLoader();
        $.post('views/UnavailabilityRightClick.ashx', function (data) {
            {
                $('#rightClick').html(data);
                $('[data-unavailable]').unbind('click').bind('click', RegularSchedule.Unavailable);
                $('#rightClick').show();
                HideLoader();
            }
        }, "html");
        return false;
    });
    $('[shift="true"]').click(function () { });
    $('#rightClick').bind("contextmenu", function (e) {
        $('#rightClick').hide();
        return false;
    });
};
RegularSchedule.Unavailable = function (event) {
    let reasonId = $(this).attr('data-unavailable');
    let code = $(this).attr('data-code');
    let date = RegularSchedule.UnavailableSlot.attr('data-date');
    let items = $('[data-personnel="' + RegularSchedule.Request.StaffId + '"] [data-date="' + date + '"]').length;
    let personnelId = RegularSchedule.Request.StaffId;
    console.debug(items);
    let ok = true;
    if (new Date(date) < new Date) {
        ok = confirm('Please note the start date is in the past would you like to continue?');
    }
    if (ok) {
        $.post('handlers/availability/regularUnavailable.ashx?st=' + personnelId + '&reason=' + reasonId + '&date=' + date, function (data) {
            if (data === 'Y') {
                RegularSchedule.Load(undefined, personnelId);
                //RegularSchedule.UnavailableSlot.addClass('notavailable');
                //let item = RegularSchedule.Templates.ScheduleShift.clone();
                //item.text(code);
                //RegularSchedule.UnavailableSlot.append(item);
                //RegularSchedule.UnavailableSlot.unbind('contextmenu');
                //RegularSchedule.Reload = true;
                $('#rightClick').hide();
            }
        });
    }
    event.stopPropagation();
    return false;
};

RegularSchedule.SetBookedRightClick = function () {
    $('[data-shiftday]').unbind('contextmenu').bind("contextmenu", function (e) {
        RegularSchedule.UnavailableSlot = $(this);
        $('#rightClick').css({ 'left': (e.pageX - $(this).height()) + 'px', 'top': (e.pageY - $(this).width()) + 'px', 'position': 'absolute' });
        ShowLoader();
        $.post('views/RegularBookedRightClick.ashx', function (data) {
            {
                $('#rightClick').html(data);
                $('[data-action="RemovePersonnel"]').unbind('click').bind('click', RegularSchedule.RemovePersonnelDialog);
                $('[data-action="CancelAssignment"]').unbind('click').bind('click', RegularSchedule.CancelShiftDialog);
                $('[data-action="ChangeTime"]').unbind('click').bind('click', RegularSchedule.EditShiftTime);
                //$('[data-action="PreviewAssignment"]').unbind('click').bind('click', RegularSchedule.PreviewAssignment);
                $('#rightClick').show();
                HideLoader();
            }
        }, "html");
        return false;
    });
    $('[shift="true"]').click(function () { });
    $('#rightClick').bind("contextmenu", function (e) {
        $('#rightClick').hide();
        return false;
    });
};
RegularSchedule.SetAvailabilityRightClick = function () {
    $('[data-availabilityid]').unbind('contextmenu').bind("contextmenu", function (e) {
        RegularSchedule.UnavailableSlot = $(this);
        $('#rightClick').css({ 'left': (e.pageX - $(this).height()) + 'px', 'top': (e.pageY - $(this).width()) + 'px', 'position': 'absolute' });
        $('#rightClick').html('<ul><li><b><a href="#" data-action="RemoveAvailability">Remove</a></b></li></ul>');
        $('[data-action="RemoveAvailability"]').unbind('click').bind('click', RegularSchedule.RemoveAvailability);
        $('#rightClick').show();
        return false;
    });
};
RegularSchedule.RemoveAvailability = function () {
    let url = '/regularschedule/removeavailability';
    let id = $(RegularSchedule.UnavailableSlot).attr('data-availabilityid');
    $.post(url, JSON.stringify({ ClientId: id }), function (data) {
        if (data.Success === true) {
            RegularSchedule.UnavailableSlot.removeAttr('data-availabilityid').attr('data-allowedit', true).unbind('click').bind('click', RegularSchedule.SelectItem).removeClass('notavailable').removeClass('available').html('');
            $('[data-availabilityview="' + id + '"]').remove();
            RegularSchedule.SetUnavailableRightClick();
            ShowNotification("<i class='icon-ok-sign'></i> Changes are successfully saved.", "greenNotification");
            $('#rightClick').hide();
        }
        else
            ShowNotification("<i class='icon-warning-sign'></i> Error occured. Please try again.", "redNotification");
    });
    return false;
};
RegularSchedule.RemovePersonnelDialog = function () {
    let shift = $(RegularSchedule.UnavailableSlot).attr('data-id');
    var url = 'views/dialog/CancelAssignmentConfirm.aspx?s=' + shift;
    ShowLoader();
    $.post(url, function (data) {
        {
            LoadPopUp(data);
            HideLoader();
        }
    }, "html");
};

function CancelAssignment(shift, decline) {
    var url = 'handlers/shifts/CancelAssignment.ashx?s=' + shift + '&d=' + decline + '&n=' + ($('#cbNotifyCancel').is(':checked') ? 'true' : 'false');
    ShowLoader();
    $.post(url, function (data) {
        {
            $('#rightClick').hide();
            ShowNotification("<i class='icon-ok-sign'></i> Personnel has been removed.", "greenNotification");
            if (data == 'Y')
                RegularSchedule.Load(undefined, RegularSchedule.Request.StaffId);
            else
                ConcurrencyError();
            HidePopUp();
            HideLoader();
        }
    }, "html");
}

RegularSchedule.CancelShiftDialog = function () {
    let shift = $(RegularSchedule.UnavailableSlot).attr('data-id');
    var url = 'views/dialog/cancelShift.aspx?s=' + shift;
    ShowLoader();
    $.post(url, function (data) {
        {
            LoadPopUp(data);
            $('#aBillCancelledShift').attr('onclick', 'RegularSchedule.DoCancellation(' + shift + ', false);return false;');
            $('#aDontBillCancelledShift').attr('onclick', 'HidePopUp();return false;');
            HideLoader();
        }
    }, "html");
};
RegularSchedule.DoCancellation = function (id, bill) {
    if (validateRequired($('#tbCancelReason'), $('#tbCancelReasonMessage'), "", "")) {
        var url = 'handlers/shifts/CancelShift.ashx?s=' + id + '&b=' + bill + '&reason=' + $('#hfReasonId').val() + '&notify=' + ($('#cbNotify').is(':checked') ? 'true' : 'false');
        ShowLoader();
        $.post(url, function (data) {
            {
                $('#rightClick').hide();
                if (data == 'Y') {
                    ShowNotification("<i class='icon-ok-sign'></i> Assignment has been canceled.", "greenNotification");
                    HidePopUp();
                    RegularSchedule.Load(undefined, RegularSchedule.Request.StaffId);
                }
                HideLoader();
            }
        }, "html");
    }
    else
        ShowNotification("<i class='icon-minus-sign'></i> Please select a reason for cancelling assignment.", "redNotification");
};

function SetShiftEvents() {



    $('[data-shiftpreview]').unbind('mouseover').bind('mouseover', (function (e) {
        HoverDetails(e.pageX, e.pageY, this);
        e.stopPropagation();
    }));

    $('.divRegularScheduleShiftsRow:not("[data-shiftpreview]")').not('[data-shiftday]').mouseover(function (e) {
        $("#divShiftHover").hide();
    });

    $('[data-shiftpreview]').unbind('mouseout').bind('mouseout', (function () {
        clearTimeout(RegularSchedule.Timer);
    }));
}

function HoverDetails(xx, yy, div) {
    RegularSchedule.Timer = setTimeout(function () {
        if (!$('#rightClick').is(":visible") && $('#divShiftHover').is(":hidden")) {
            RegularSchedule.UnavailableSlot = div;
            var leftPosition;
            var topPosition;
            var pos = $(div).offset();
            var divHeight = $('#divShiftHover').height() === 0 ? 200 : $('#divShiftHover').height();
            var divWidth = $('#divShiftHover').width() === 0 ? 500 : $('#divShiftHover').width();
            if (pos.left > $('#divShiftHover').width())
                leftPosition = xx - divWidth - $(window).scrollLeft();
            else
                leftPosition = xx;

            if (pos.top > $('#divShiftHover').height())
                topPosition = yy - divHeight;
            else
                topPosition = yy;

            $('#divShiftHover').css({ 'left': (leftPosition + 5) + 'px', 'top': (topPosition + 5) + 'px', 'position': 'fixed' });
            RegularSchedule.PreviewAssignment();
        }
    }, 1000);
}
RegularSchedule.PreviewAssignment = function () {
    let shift = $(RegularSchedule.UnavailableSlot).attr('data-id');
    var url = 'views/details/shiftHover.aspx?s=' + shift + '&ids=';
    ShowLoader();
    $.post(url, function (data) {
        {
            //LoadPopUp(data);
            $('#divShiftHover').html(data);
            $('#divShiftHover').show();
            $('#divShiftHover').mouseover(function (e) {
                $('#divShiftHover').show();
            });
            $('#divShiftHover').mouseout(function () {
                $('#divShiftHover').hide();
            });
            $('#aCopy,#aPreviousShift,#aNextShift').remove();
            $('#rightClick').hide();
            HideLoader();
        }
    }, "html");
    return false;
};

RegularSchedule.EditShiftTime = function () {
    var url = 'forms/editShiftTime.aspx?s=' + $(RegularSchedule.UnavailableSlot).attr('data-id');
    ShowLoader();
    $.post(url, function (data) {
        {
            $('.popUpContent').html(data);
            $('.PopUp').show();
            $('#editShiftTimeForm').ajaxForm({
                success: function (data) {
                    RegularSchedule.EditShiftTimeCallback($(data).find('#hfStatus').val());
                }
            });
            HideLoader();
        }
    }, "html");
};
RegularSchedule.EditShiftTimeCallback = function (status) {
    if (status !== '') {
        var splitted = status.split('-');
        var url = 'views/dialog/UpdateTime.aspx?s=' + splitted[0] + '&df=' + splitted[1] + '&dt=' + splitted[2];
        ShowLoader();
        $.post(url, function (data) {
            {
                $('.popUpContent').html(data);
                $('.PopUp').show();
                HideLoader();
            }
        }, "html");
    }
    else {
        //var date = new Date(Date.parse(KalendaeSelectFormat($('#lblDateFrom').val().replace(/\./g, '/'), 'DD/MM/YYYY') + ' ' + $('#tbTimeStart').val()));
        //var date1 = new Date(Date.parse(KalendaeSelectFormat($('#lblDateTo').val().replace(/\./g, '/'), 'DD/MM/YYYY') + ' ' + $('#tbTimeEnd').val()));
        //RegularSchedule.UnavailableSlot.text($.format.date(date, 'HH:mm') + ' - ' + $.format.date(date1, 'HH:mm'));
        RegularSchedule.Load(undefined, RegularSchedule.Request.StaffId);
        ShowNotification("<i class='icon-ok-sign'></i> Time of the shift was updated.", "greenNotification");
    }
};
function okSubmit() { }

//#endregion

//#region Available

RegularSchedule.SetAvailableOnly = function () {
    if ($(this).is(':checked')) {
        $('[data-type="booking"]').hide();
        RegularSchedule.Request.Type = "Availability";
    }
    else {
        RegularSchedule.Request.Type = "Booking";
        $('[data-type="booking"]').show();
    }
};

//#endregion