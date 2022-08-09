export function filterGeneral(filterValue: string,
                              radioValue: string,
                              objectList: { name: string, id: string }[],
) {

    const returnArray: { name: string, id: string }[] = [];

    objectList.forEach((item: { name: string, id: string }) => {
        const searchParam: string[] = [];

        switch (radioValue) {
            case "name": {
                searchParam.push(item.name.toLowerCase());
                break;
            }
            case "id": {
                searchParam.push(item.id.toLowerCase());
                break;
            }
            case "all": {
                searchParam.push(item.name.toLowerCase(), item.id.toLowerCase());
                break;
            }
        }

        for (const param of searchParam) {
            if (param.includes(filterValue.toLowerCase())) {
                returnArray.push(item);
                break;
            }
        }
    })

    return returnArray;
}

