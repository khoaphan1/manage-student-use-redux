
import './App.css';
import {useStore, actions} from './ManagementStudent'
import {useRef, useState, useEffect} from 'react'

const sexs = [
  {
    id : 1,
    name : 'Nam'
  },
  {
    id : 2,
    name : 'Nữ'
  },
  {
    id : 3,
    name : 'Khác'
  },
]

const frameworks = [
  {
    id : 1,
    name : 'ReactJS'
  },
  {
    id : 2,
    name : 'VueJS'
  },
  {
    id : 3,
    name : 'Angular'
  },
]

function App() {

  const [state, dispatch] = useStore()

  const firstRef = useRef()

  let isEdit = false
  
  const [isedit, setIsedit] = useState(false)
  const [idedit, setIdedit] = useState()

  let { students,
          avataInput, 
          subnameInput,
          nameInput,
          phoneInput,
          ageInput,
          emailInput,
          addressInput,
          sexInput,
          frameworkInput,
  } = state

  const handleCheck = (name) => {
    const isChecked = frameworkInput.includes(name)
    if(isChecked){
      frameworkInput = frameworkInput.filter(item => item !== name)
    }else{
      frameworkInput = [...frameworkInput, name]
    }
    dispatch(actions.setFrameworkInput(frameworkInput))
  }

  const handleAdd = () => {
    // dispatch.actions.addStudent({
    //   subname : subnameInput,
    //   name : nameInput,
    //   phone : phoneInput,
    //   age : ageInput,
    //   email : emailInput,
    //   address : addressInput,
    //   sex : sexInput,
    //   framework : frameworkInput,
    // })
    
    dispatch(actions.addStudent({
      subname : subnameInput,
      name : nameInput,
      phone : phoneInput,
      age : ageInput,
      email : emailInput,
      address : addressInput,
      sex : sexInput,
      framework : frameworkInput,
    }))

    // dispatch(actions.addStudent(subnameInput))
    state.subnameInput = ''
    state.nameInput = ''
    state.phoneInput = ''
    state.ageInput = ''
    state.emailInput = ''
    state.addressInput = ''
    state.sexInput = 1
    state.frameworkInput = ''
    firstRef.current.focus()
  }

  const handleEdit = (index) => {
    console.log(students[index])
    dispatch(actions.setSubnameInput(students[index].subname))
    dispatch(actions.setNameInput(students[index].name))
    dispatch(actions.setPhoneInput(students[index].phone))
    dispatch(actions.setAgeInput(students[index].age))
    dispatch(actions.setEmailInput(students[index].email))
    dispatch(actions.setAddressInput(students[index].address))
    dispatch(actions.setSexInput(students[index].sex))
    dispatch(actions.setFrameworkInput(students[index].framework))
    // nameInput = students[index].name
    // phoneInput = students[index].phone
    // ageInput = students[index].age
    // emailInput = students[index].email
    // addressInput = students[index].address
    // sexInput = students[index].sex
    // frameworkInput = students[index].framework
    firstRef.current.focus()
    setIsedit(true)
    setIdedit(index)
    console.log(isEdit)

  }

  const handleSave = () => {
    dispatch(actions.editStudent(
    {
      stt : idedit,
      replaceStudent : {
        subname : subnameInput,
        name : nameInput,
        phone : phoneInput,
        age : ageInput,
        email : emailInput,
        address : addressInput,
        sex : sexInput,
        framework : frameworkInput,
      }
      
    }))
    setIsedit(false)
    state.subnameInput = ''
    state.nameInput = ''
    state.phoneInput = ''
    state.ageInput = ''
    state.emailInput = ''
    state.addressInput = ''
    state.sexInput = 1
    state.frameworkInput = ''
    firstRef.current.focus()

  }

  const handleCancel = () => {
    setIsedit(false)
    state.subnameInput = ''
    state.nameInput = ''
    state.phoneInput = ''
    state.ageInput = ''
    state.emailInput = ''
    state.addressInput = ''
    state.sexInput = 1
    state.frameworkInput = ''
    firstRef.current.focus()
  }

  const handleAvata = (e) =>{
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    dispatch(actions.setAvataInput(file))
  }

  useEffect(() => {
        //Clean up
        return () => {
          avataInput && URL.revokeObjectURL(avataInput.preview)
        } 
  }, [avataInput])


  return (
    <div className="App">

      <div className='form_wrapper'>
        <div className='form_container'>
          <div className='title_container'>
              <h2>Quản lý học sinh</h2>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&usqp=CAU'/>
          </div>

          <div className='row clearfix'>
            <div>
              <form>

                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input
                        type="text"
                        ref={firstRef}
                        value={subnameInput}
                        placeholder= "Nhập họ và tên đệm"
                        onChange={e => {
                          dispatch(actions.setSubnameInput(e.target.value))
                        }}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input
                        type="text"
                        value={nameInput}
                        placeholder= "Nhập tên"
                        onChange={e => {
                          dispatch(actions.setNameInput(e.target.value))
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input
                        type="text"
                        value={phoneInput}
                        placeholder= "Số điện thoại"
                        onChange={e => {
                          dispatch(actions.setPhoneInput(e.target.value))
                        }}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input
                        type="text"
                        value={ageInput}
                        placeholder= "Tuổi"
                        onChange={e => {
                          dispatch(actions.setAgeInput(e.target.value))
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="input_field"> 
                  <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                      <input
                        type="text"
                        value={emailInput}
                        placeholder= "Email"
                        onChange={e => {
                          dispatch(actions.setEmailInput(e.target.value))
                        }}
                      />
                </div>

                

                <div className="input_field"> 
                  <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                      <input
                        type="text"
                        value={addressInput}
                        placeholder= "Địa chỉ"
                        onChange={e => {
                          dispatch(actions.setAddressInput(e.target.value))
                        }}
                      />
                </div>

                <div className="input_field"> 
                  {/* <span><i aria-hidden="true" className="fa fa-lock"></i></span> */}
                      <input
                        type="file"
                        onChange={handleAvata}
                      />
                </div>


                
                <div className='group-input-sex'>
                  {sexs.map(sex => (
                    <div key={sex.id} className="input-item">
                      <input 
                        id={`ip-${sex.id}`}
                        type="radio"
                        checked = {sexInput === sex.id}
                        onChange={() => dispatch(actions.setSexInput(sex.id))}
                      ></input>
                      <label htmlFor={`ip-${sex.id}`}>{sex.name}</label>
                    </div>
                  ))}
                </div>
                
                <div>Framework theo chọn :</div>

                <div className='group-input-sex'>
                  {frameworks.map(framework => (
                    <div key={framework.id} className="input-item">
                      <input 
                        id={`cb-${framework.id}`}
                        type="checkbox"
                        checked = {frameworkInput.includes(framework.name)}
                        onChange={() => handleCheck(framework.name)}
                      ></input>
                      <label htmlFor={`cb-${framework.id}`}>{framework.name}</label>
                    </div>
                  ))}
                </div>

                

                
              </form>
              <div>
                {(isedit) ?  <div>
                  <button
                    key={"save"}
                    className="button btn-save"
                    onClick={ handleSave}
                  >
                    Lưu
                  </button>
                  <button
                    key={"cancel"}
                    className="button btn-cancel"
                    onClick={ handleCancel}
                  >
                    Hủy
                  </button>
                </div>
                : 

                  <button 
                    key={"add"}
                    className="button"
                    onClick={ handleAdd}
                    >Thêm mới
                  </button>
                
                
                }  
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="table-users">
        <div className="header">Danh sách sinh viên</div>
        
        <table cellSpacing="0">
          <thead>
            <tr>
                <th>STT</th>
                <th>Avata</th>
                <th>Họ và tên đệm</th>
                <th>Tên</th>
                <th>SĐT</th>
                <th>Tuổi</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Giới Tính</th>
                <th>Ngôn Ngữ</th>
                <th>Chức năng</th>
              </tr>
          </thead>
          
          <tbody>
          
            
            {students.map((student,index) => (
              <tr>
                <td>{(index + 1 )}</td>
                <td>{ avataInput && (
                      <img key={index}
                          src={avataInput[index].preview} alt="" width="80%"
                      />
                      )
                  }
                </td>
                <td>{student.subname}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{(student.sex === 1) ? 'Nam' : (student.sex === 2) ? 'Nữ' : 'Khác'}</td>
                <td>{student.framework.join(', ')}</td>
                {/* <td>{(student.framework.includes(1,2,3)) ? 'ReacJS, VueJS, Angular' : 
                     (student.framework.includes(2)) ? 'VueJS' :
                     (student.framework.includes(3)) ? 'Angular' : 'No'}</td> */}
                <td >
                  <div className='fill-button'>
                    <button className="btn-handle" onClick={() => handleEdit(index)}>Sửa</button>
                    <button className="btn-handle btn-delete" onClick={() => {dispatch(actions.deleteStudent(index))}}>Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

            
        </table>
      </div>


    </div>
  );
}

export default App;
