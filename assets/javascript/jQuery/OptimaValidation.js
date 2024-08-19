function Validate(fields, rules, messageLabels, messages, okMessages, form, okSubmit) {
    for (var i = 0; i < fields.length; i++) {
        if (fields[i] instanceof Array) {
            fields[i][1].unbind('keyup');
            fields[i][1].unbind('blur');
            fields[i][1].bind('keyup', { field: fields[i], rule: rules[i], label: messageLabels[i], message: messages[i], okMessage: okMessages[i] }, DoValidate);
            fields[i][1].bind('blur', { field: fields[i], rule: rules[i], label: messageLabels[i], message: messages[i], okMessage: okMessages[i] }, DoValidate);
            //fields[i][1].bind('click', { field: fields[i], rule: rules[i], label: messageLabels[i], message: messages[i], okMessage: okMessages[i] }, DoValidate);
        }
        else {
            fields[i].unbind('keyup');
            fields[i].unbind('blur');
            fields[i].unbind('click');
            fields[i].bind('keyup', { field: fields[i], rule: rules[i], label: messageLabels[i], message: messages[i], okMessage: okMessages[i] }, DoValidate);
            fields[i].bind('blur', { field: fields[i], rule: rules[i], label: messageLabels[i], message: messages[i], okMessage: okMessages[i] }, DoValidate);
            fields[i].bind('click', { field: fields[i], rule: rules[i], label: messageLabels[i], message: messages[i], okMessage: okMessages[i] }, DoValidate);
        }
    }
    form.unbind('submit');
    form.submit(function () {
        var ok = true;
        for (var i = 0; i < fields.length; i++) {
            if (!DoValidateParameters(fields[i], rules[i], messageLabels[i], messages[i], okMessages[i])) {
                ok = false;
                //alert('not valid');
                setTimeout(function () { ShowNotification("<i class='icon-minus-sign'></i> Please fill all required fields.", "redNotification"); }, 500);
                //break;
            }
        }
        if (ok) {
            //alert('Valid');
            okSubmit();
        }
        return ok;
    });
}

//****************** Validation Functions **********************//

function DoValidate(e) {
    var field = e.data.field;
    var rule = e.data.rule;
    var label = e.data.label;
    var message = e.data.message;
    var okMessage = e.data.okMessage;
    DoValidateParameters(field, rule, label, message, okMessage);
}

function DoValidateParameters(field, rule, label, message, okMessage) {
    if (field.val() == undefined)
        return true;
    else
        switch (rule) {
        case "required":
            return validateRequired(field, label, message, okMessage);
        case "email":
            return validateEmail(field, label, message, okMessage);
            break;
        case "emailNotRequired":
            return validateEmailNotRequired(field, label, message, okMessage);
            break;
        case "password":
            return validatePassword(field, label, message, okMessage); // && validateConfirmPassword(field[0], field[1], label, message, okMessage);
            break;
        case "decimal":
            return validateDecimal(field, label, message, okMessage);
            break;
//        case "decimalRequired":
//            return validateDecimalRequired(field, label, message, okMessage);
//            break;
        case "numeric":
            return validateNumeric(field, label, message, okMessage);
            break;
        case "numericRequired":
            return validateNumericRequired(field, label, message, okMessage);
            break;
        case "hour":
            return validateHour(field, label, message, okMessage);
            break;
        case "unique":
            return validateUnique(field, label, message, okMessage);
            break;
        case "duration":
            return validateDuration(field, label, message, okMessage);
            break;
        case "firstItem":
            return validateDropDownFirstItem(field, label, message, okMessage);
            break;
        case "radio":
            return validateRadio(field, label, message, okMessage);
            break;
        default:
            {
                //                if (rule.substring(0, 2) == "min") {
                //                    var splitted = rul.split("|");
                //                    validateMinLength(field, label, message, okMessage, splitted[1]);
                //                }
                return true;
            }
    }
}

function validateEmail(field, label, message, okMessage) {
    label.hide();
    //testing regular expression
    var a = field.val();
    var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
    //if it's valid email
    if (filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateEmailNotRequired(field, label, message, okMessage) {
    label.hide();
    //testing regular expression
    var a = field.val();
    var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
    //if it's valid email
    if (a == '' || filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validatePassword(field, label, message, okMessage) {
    label.hide();
    //testing regular expression
    var a = field.val();
    var filter = /^(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/;
    //if it's valid password
    if (field.val() == '' || filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateDecimal(field, label, message, okMessage) {
    label.hide();
    var a = field.val();
    var filter = /^(?:\d*\.\d{1,2}|\d+)$/;
    if (a == undefined)
        return true;
    if (filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateNumeric(field, label, message, okMessage) {
    label.hide();
    var a = field.val();
    var filter = /^[0]*(0|[1-9][0-9]*)$/;
    if (a == undefined)
        return true;
    if (a == '')
        return true;
    if (filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateNumericRequired(field, label, message, okMessage) {
    label.hide();
    var a = field.val();
    var filter = /^[0]*(0|[1-9][0-9]*)$/;
    if (a == undefined)
        return true;
    if (filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}


function validateHour(field, label, message, okMessage) {
    label.hide();
    var a = field.val();
    var filter = /^(([0-9])|([0-1][0-9])|([2][0-3]))(:(([0-9])|([0-5][0-9])))?$/;
    if (filter.test(a)) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateDuration(field, label, message, okMessage) {
    label.hide();
    var a = field.val();
    if (a * 1 > 0) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateMinLength(field, label, message, okMessage, min) {
    label.hide();
    //if it's NOT valid
    if (field.val().length < min) {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
    //if it's valid
    else {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
}

function validateRequired(fields, labels, message, okMessage) {
    var ok = true;
    for (i = 0; i < fields.length; i++) {
        var field = $(fields[i]);
        var label = $(labels[i]);
        label.hide();
        //if it's NOT valid
        if (field.val().length < 1 || field.val() == undefined || field == null) {
            field.addClass("error");
            label.text(message);
            label.addClass("error");
            label.removeClass("error");
            if (message != "")
                label.show();
            else
                label.hide();
            return false;
        }
        //if it's valid
        else {
            field.removeClass("error");
            label.text(okMessage);
            label.removeClass("error");
            label.removeClass("error");
            if (okMessage != "")
                label.show();
            else
                label.hide();
            ok = true;
        }
    }
    return ok;
}

function validateUnique(field, label, message, okMessage) {
    label.hide();
    //if it's NOT valid
    if (field.val() == 'N') {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
    //if it's valid
    else if (field.val() == 'Y') {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
}

function validateConfirmPassword(password, confirm, label, message, okMessage) {
    label.hide();
    //are NOT valid
    if (password.val() != confirm.val()) {
        confirm.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
    //are valid
    else {
        confirm.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
}

function validateDropDownFirstItem(field, label, message, okMessage) {
    label.hide();
    var a = field.val();
    if (a != 0) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}

function validateRadio(field, label, message, okMessage) {
    label.hide();
    if ($(field).find('input:checked').length > 0) {
        field.removeClass("error");
        label.text(okMessage);
        label.removeClass("error");
        label.removeClass("error");
        if (okMessage != "")
            label.show();
        else
            label.hide();
        return true;
    }
    //if it's NOT valid
    else {
        field.addClass("error");
        label.text(message);
        label.addClass("error");
        label.removeClass("error");
        if (message != "")
            label.show();
        else
            label.hide();
        return false;
    }
}