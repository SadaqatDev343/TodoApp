import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/slices';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({id: Date.now(), text: taskText}));
      setTaskText('');
      navigation.navigate('TaskList');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp('2%'),
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: wp('10%'),
    width: wp('25%'),
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('2%'),
    right: wp('2%'),
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    marginLeft: wp('2%'),
  },
});

export default AddTaskForm;
