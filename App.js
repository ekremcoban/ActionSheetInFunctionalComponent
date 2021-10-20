/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { createRef, useState } from 'react';
import {View, Text} from 'react-native'
import ActionSheet from '@alessiocancian/react-native-actionsheet'

const data = [
  {
      id: 0,
      name: 'İstanbul'
  },
  {
      id: 1,
      name: 'Ankara'
  },
  {
      id: 2,
      name: 'İzmir'
  },
  {
      id: 3,
      name: 'İstanbul'
  },
  {
      id: 4,
      name: 'Ankara'
  },
  {
      id: 5,
      name: 'İzmir'
  },
  {
      id: 6,
      name: 'İstanbul'
  },
  {
      id: 7,
      name: 'Ankara'
  },
  {
      id: 8,
      name: 'İzmir'
  },
  {
      id: 9,
      name: 'Samsun'
  },
  {
      id: 10,
      name: 'İzmir'
  },
  {
      id: 11,
      name: 'İstanbul'
  },
  {
      id: 12,
      name: 'Ankara'
  },
  {
      id: 13,
      name: 'İzmir'
  },
  {
      id: 14,
      name: 'Cancel'
  },
]

const App = () => {
  const ref = createRef();
  const [showActionText, setShowActionText] = useState('Open ActionSheet')
  const showActionSheet = () => {
    ref.current.show()
  }
  
    return (
      <View view style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text onPress={showActionSheet}>{showActionText}</Text>
        <ActionSheet
          ref={ref}
          title={'Which one do you like ?'}
          options={data.map(d => d.name)}
          cancelButtonIndex={14}
        //   destructiveButtonIndex={2}
          onPress={(index) => { /* do something */
            console.log('id', index)
            setShowActionText(data[index].name)
        }}
        />
      </View>
    )
};

export default App;
