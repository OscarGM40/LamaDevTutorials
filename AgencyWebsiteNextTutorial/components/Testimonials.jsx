


import Image from 'next/image';
import styles from '../styles/Testimonials.module.css';
import Circle from './Circle';


const Testimonials = ( {users} ) => {
  // console.log(users);
  
  return (
    <div className={styles.container}>
    <Circle 
      backgroundColor="darkblue"
      top="-70vh"
      left="0"
      right="0"
    />
     <h1 className={styles.title}>Testimonials</h1>
    <div className={styles.wrapper}>
      {users.map(user =>(
        <div key={user.id} className={styles.card}>
          <Image src={`/img/${user.logo}`}
            width={40}
            height={40}
            alt={user.name}
             />
          <p className={styles.comment}>{user.comment}</p>
          <div className={styles.person}>
            <Image src={`/img/${user.avatar}`}
              width={50}
              height={50}
              objectFit={'cover'}
              alt={user.name}
              className={styles.avatar}
            />    
            <div className={styles.info}>
              <span className={styles.username}>{user.name}</span>
              <span className={styles.jobTitle}>{user.title}</span>
            </div>
          </div>     
       </div>
      ))}
    </div> 
    </div>
  )
}

export default Testimonials
