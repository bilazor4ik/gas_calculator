export const reducer = (state,action)=>{
    switch (action.type) {
        case 'SELECT_YEAR':
          return ([{
            step: '01',
            name: action.payload,
            status: 'complete',
            selectedYear: action.payload
        },
        {
            step: '02',
            name: 'Car Make',
            status: 'current',
            selectedMake: ''
        },
        {
            step: '03',
            name: 'Car Model',
            status: 'upcoming',
            selectedModel: ''
        },
        {
            step: '04',
            name: 'Car Options',
            status: 'upcoming',
            selectedOption: ''
        }])
        case 'SELECT_MAKE':
          return ([{...state[0]
        },
        {
            step: '02',
            name: action.payload,
            status: 'complete',
            selectedMake: action.payload
        },
        {
            step: '03',
            name: 'Car Model',
            status: 'current',
            selectedModel: ''
        },
        {
            step: '04',
            name: 'Car Options',
            status: 'upcoming',
            selectedOption: ''
        }])
        case 'SELECT_MODEL':
          return ([{...state[0]},
        {
            ...state[1]
        },
        {
            step: '03',
            name: action.payload,
            status: 'complete',
            selectedModel: action.payload
        },
        {
            step: '04',
            name: 'Car Options',
            status: 'current',
            selectedOption: ''
        }])
        case 'SELECT_OPTION':
            
          return ([{...state[0]},
        {
            ...state[1]
        },
        {
            ...state[2]
        },
        {
            step: '04',
            name: action.payload.text,
            status: 'complete',
            selectedOption: action.payload.value
        }])
        default:
          throw new Error();
      }
      
}

/* 'SELECT_MODEL'
{
        step: '01',
        name: 'Car Year',
        status: 'current',
        selectedYear: ''
    },
*/