import React from 'react';

import {PickerView} from './styles';

export default function PickerComponent({onChange,tipoVal}){
    return(

        <PickerView
            selectedValue={tipoVal}
            onValueChange={(tipo,id) => onChange(tipo)}
            >
            <PickerView.Item label="Receita" value="receita" />
            <PickerView.Item label="Despesa" value="despesa" />
        </PickerView>
        // <PickerView>
        //     <RNPickerSelect style={{
        //         inputIOS:{
        //         height: 50,
        //         padding: 5,
        //         backgroundColor: '#FFF',
        //         fontSize: 16
        //     }
        // }}
        //     placeholder={{
        //         label : 'Selecione o tipo',
        //         color: '#222',
        //         value: null
        //     }}
        //     onValueChange={(tipo) => onChange(tipo)}
        //     items={
        //         [
        //             {label: "Receita", value: 'receita', color: '#222'},
        //             {label: "Despesa", value: 'despesa', color: '#222'},
        //         ]
        //     }/>
        // </PickerView>
    );
}