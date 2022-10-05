import { db, GUEST_COLLECTION } from '../../firebase/config'
import { collection, query, orderBy, onSnapshot, addDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore'

const Contact = () => {
  const addGuest = async evt => {
    console.log('PROC')
    evt.preventDefault()
    await setDoc(doc(db, GUEST_COLLECTION, 'test3'), {
      name: 'test2',
      isChild: false,
      isVegetarian: false,
      isPresent: true,
    })
  }

  return (
    <div className='wrapper'>
      <button onClick={evt => addGuest(evt)}>ADD DUMMY DATA</button>
    </div>
  )
}

export default Contact
