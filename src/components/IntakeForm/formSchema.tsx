import * as Yup from 'yup';

export const formSchema = (columns: any) => {
	let tempSchema: any = {};

	for (let i = 0; i < columns.length; i++) {
		switch (columns[i].fieldTypeKind) {
			case 9:
				if (columns[i].required) {
					tempSchema[columns[i].fieldName] = Yup.number()
						.integer(`${columns[i].name} must be a number`)
						.positive(`${columns[i].name} must be positive`)
						.moreThan(0, `${columns[i].name} is required`)
						.required(`${columns[i].name} is required`);
				} else {
					tempSchema[columns[i].fieldName] = Yup.number();
				}
				break;
			case 20:
				if (columns[i].required) {
					tempSchema[columns[i].fieldName] = Yup.array()
						.min(1, `${columns[i].name} is required`)
						.required(`${columns[i].name} is required`);
				} else {
					tempSchema[columns[i].fieldName] = Yup.array();
				}
				break;
			default:
				if (columns[i].required) {
					tempSchema[columns[i].fieldName] = Yup.string().required(
						`${columns[i].name} is required`
					);
				}
		}
	}

	return Yup.object().shape(tempSchema);
};