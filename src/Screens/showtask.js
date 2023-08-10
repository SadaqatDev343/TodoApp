import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeTask} from '../redux/slices';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskList = () => {
  const navigation = useNavigation();
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = id => {
    dispatch(removeTask(id));
  };

  const handleAddTaskNavigation = () => {
    navigation.navigate('AddTask');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {tasks.map(task => (
          <View key={task.id} style={styles.taskItem}>
            <View style={styles.taskBorder}>
              <View style={styles.taskContent}>
                <Text>{task.text}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleRemoveTask(task.id)}>
                <Icon name="trash" size={wp('5%')} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleAddTaskNavigation}>
          <Icon name="plus" size={wp('5%')} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: wp('3%'),
  },
  container1: {
    flex: 0.9,
    padding: wp('3%'),
  },
  container2: {
    flex: 0.1,
    padding: wp('3%'),
  },
  taskItem: {
    marginBottom: hp('1%'),
  },
  taskBorder: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp('2%'),
    padding: wp('2%'),
  },
  taskContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: wp('85%'),
  },
  floatingButton: {
    backgroundColor: '#007bff',
    borderRadius: wp('10%'),
    width: wp('13%'),
    height: wp('13%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('2%'),
    right: wp('2%'),
    elevation: 3,
  },
});

export default TaskList;
