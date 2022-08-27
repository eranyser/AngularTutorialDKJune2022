import { Pipe, PipeTransform } from "@angular/core";

/**
 * This class demonstrate the definition of a custom Pipe. we use it in product_list.component.html for the productCode property 
 * to replace all '-' with ' '.
 * There is a docorator @Pipe on which we declare the pipe name and we implements the method transform from the imterface PipeTransform.
 * the first parameter for the medhod is the value, in our case porductCode and the next parameters are passed to the pipe.
 * see the implementstion in product_list.component.html: <td> {{product.productCode | lowercase | convertToSpaces:'-' }}</td>
 */

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }
}