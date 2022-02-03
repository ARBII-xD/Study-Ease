import {firestoreDatabase} from '../firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc  } from 'firebase/firestore'


const studentInfo = collection(firestoreDatabase, 'students')
class addedStudentInfo{
    addStudents = (newStudentInfo) =>{
        return addDoc(studentInfo,'newStudentInfo')
    }

}