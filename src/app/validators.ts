import { NgTemplateOutlet } from "@angular/common"
import { AbstractControl } from "@angular/forms"

export function domainvalidator(control: AbstractControl) {
    if (control.dirty) {
        if (control.value?.includes("@capgemini.com")) {
            return null;
        }
        else {
            return { 'domainvalidator': '@capgemini.com missing' };
        }
    }
    else {
        return null;
    }
}

export function statevalidator(control: AbstractControl) {

    if (control.value?.toLowerCase()== 'telengana' || control.value?.toLowerCase()== 'andhra pradesh' ) {
        
        return null;
    }
    else {
        return { 'statevalidator': 'only ts and ap' };
    }




}