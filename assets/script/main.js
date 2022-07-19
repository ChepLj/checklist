var dataMain = [
    {
    "id": "01",
    "comment": "Group",
    "description": "Khu Vực BF",
    "array": [
                {
                "id": "01",
                "comment": "Area",
                "description": "Nhà Quạt",
                "array": [
                        {
                        "id": "01",
                        "comment": "Equipment",
                        "description": "Tủ điện trung thế BPRT",
                        "array": [
                        {
                        "id": "01",
                        "comment": "Content",
                        "description": "Relay trung thế báo lỗi",
                        "type": [
                        "check",
                        "Bình Thường",
                        "Có vấn đề"
                        ],
                        "result": {
                        "220714": ["ok","Bình Thường"]
                        }
                        }
                        ]
                        },
                {
                "id": "02",
                "comment": "Equipment",
                "description": "Motor BPRT (12MW)",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Nhiệt độ cuộn dây",
                "type": [
                "typing",
                "A",
                "B",
                "C"
                ],
                "result": {
                "220714": ["ok", [56.7,66,65]]
                }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": " Nhiệt độ bạc đạn",
                "type": [
                "typing",
                "Đầu",
                "Đuôi"
                ],
                "result": {
                "220714": ["warn", [56.7,90,65]]
                }
                }
                ]
                },
                {
                "id": "03",
                "comment": "Equipment",
                "description": "Tủ điện trung thế D2500",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Relay trung thế báo lỗi",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "04",
                "comment": "Equipment",
                "description": "Motor D2500 (10.5MW)",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Nhiệt độ cuộn dây",
                "type": [
                "typing",
                "A",
                "B",
                "C"
                ],
                "result": { 
                    "220714": ["error", [156,120,143]]
                }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": " Nhiệt độ bạc đạn",
                "type": [
                "typing",
                "Đầu",
                "Đuôi"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "05",
                "comment": "Equipment",
                "description": "Tủ điện trung thế lộ phân phối",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Nhiệt độ (từ 25-32°C)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Độ ẩm trung bình (từ 65-75%)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                },
                {
                "id": "03",
                "comment": "Content",
                "description": "Relay trung thế báo lỗ",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "06",
                "comment": "Equipment",
                "description": "Hệ thống bù",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Tủ bù P1+P2",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Tủ bù E1+E2",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                },
                {
                "id": "03",
                "comment": "Content",
                "description": "Tủ bù F1+F2",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "07",
                "comment": "Equipment",
                "description": "MBA số 3",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Nhiệt độ",
                "type": [
                "typing",
                "Dầu"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Âm thanh MBA",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "08",
                "comment": "Equipment",
                "description": "MBA số 4",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Nhiệt độ",
                "type": [
                "typing",
                "Dầu"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Âm thanh MBA",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "09",
                "comment": "Equipment",
                "description": "Tủ UPS (BPRT+D2500)",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "( Ghi rõ cảnh báo nếu màn hình HMI báo)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "10",
                "comment": "Equipment",
                "description": "Tủ UPS (dãy phân phối)",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "( Ghi rõ cảnh báo nếu màn hình HMI báo)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "11",
                "comment": "Equipment",
                "description": "Tủ phân phối hạ thế",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "(Kiểm tra chi tiết từng ngăn tủ)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "12",
                "comment": "Equipment",
                "description": "Máy lạnh phòng điện trung+hạ thế",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "(Kiểm tra Hoạt động)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "13",
                "comment": "Equipment",
                "description": "Ngấm nước mương cáp điện phòng trung + hạ thế",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "(Kiểm tra Ngấm + Dột)",
                "type": [
                "check",
                "Bình Thường",
                "Có vấn đề"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "14",
                "comment": "Equipment",
                "description": "Cụm dầu bồi trơn BPRT",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Motor bơm dầu 1",
                "type": [
                "typing",
                "Dòng điện"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Motor bơm dầu 2",
                "type": [
                "typing",
                "Dòng điện"
                ],
                "result": { }
                },
                {
                "id": "03",
                "comment": "Content",
                "description": "Motor bơm dầu 1",
                "type": [
                "typing",
                "Nhiệt độ"
                ],
                "result": { }
                },
                {
                "id": "04",
                "comment": "Content",
                "description": "Motor bơm dầu 2",
                "type": [
                "typing",
                "Nhiệt độ"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "15",
                "comment": "Equipment",
                "description": "Cụm dầu bồi trơn D2500",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Motor bơm dầu 1",
                "type": [
                "typing",
                "Dòng điện"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Motor bơm dầu 2",
                "type": [
                "typing",
                "Dòng điện"
                ],
                "result": { }
                },
                {
                "id": "03",
                "comment": "Content",
                "description": "Motor bơm dầu 1",
                "type": [
                "typing",
                "Nhiệt độ"
                ],
                "result": { }
                },
                {
                "id": "04",
                "comment": "Content",
                "description": "Motor bơm dầu 2",
                "type": [
                "typing",
                "Nhiệt độ"
                ],
                "result": { }
                }
                ]
                },
                {
                "id": "16",
                "comment": "Equipment",
                "description": "Cụm dầu Thủy Lực",
                "array": [
                {
                "id": "01",
                "comment": "Content",
                "description": "Motor bơm dầu 1",
                "type": [
                "typing",
                "Dòng điện"
                ],
                "result": { }
                },
                {
                "id": "02",
                "comment": "Content",
                "description": "Motor bơm dầu 2",
                "type": [
                "typing",
                "Dòng điện"
                ],
                "result": { }
                },
                {
                "id": "03",
                "comment": "Content",
                "description": "Motor bơm dầu 1",
                "type": [
                "typing",
                "Nhiệt độ"
                ],
                "result": { }
                },
                {
                "id": "04",
                "comment": "Content",
                "description": "Motor bơm dầu 2",
                "type": [
                "typing",
                "Nhiệt độ"
                ],
                "result": { }
                }
                ]
                }
                ]
                },
                {
                "id": "02",
                "description": "Lò gió nóng",
                "array": [
                    {
                        "id": "01",
                        "comment": "Content",
                        "description" : "Motor bơm dầu 1",
                        "type": ["typing", "Dòng điện"],
                        "result": {
                                    "220717":["ok", [78]]                   
                                }
                    },
                    {
                        "id": "02",
                        "comment": "Content",
                        "description" : "Motor bơm dầu 2",
                        "type": ["typing", "Dòng điện"],
                        "result": {
                                    "220717":["warn", [128]]                   
                                }
                    },
                    {
                        "id": "03",
                        "comment": "Content",
                        "description" : "Motor bơm dầu 1",
                        "type": ["typing", "Nhiệt độ"],
                        "result": {
                                                        
                                }
                    }
                ]
                },
                {
                "id": "03",
                "description": "Đúc Gang",
                "array": [
                {
                "id": "01",
                "description": "Tủ điện trung thế BPRT",
                "array": [
                {
                "id": "01",
                "description": "Relay trung thế báo lỗi",
                "array": [ ]
                }
                ]
                }
                ]
                },
                {
                "id": "04",
                "description": "Lọc Bụi gas"
                }
                ]
    },
    {
    "id": "02",
    "description": "Khu Vực Lò Vôi",
    "array": [
                {
                "id": "01",
                "description": "XLB Thành Phẩm",
                "array": [
                {
                "id": "01",
                "description": "Tủ điện",
                "array": [
                {
                "id": "01",
                "description": " báo lỗi",
                "array": [ ]
                }
                ]
                }
                ]
                } ]
    },
    {
    "id": "03",
    "description": "Khu Vực Sinter"
    }
    ]

const groupMenuElm = document.querySelector('.group-menu')
const areaMenuElm = document.querySelector('.area-menu')
const equipmentMenuElm = document.querySelector('.equipment-menu')
const arowBackElm = document.querySelector('.arrow-back-icon')
const headerElm = document.querySelector('header')
const headerTitleElm = headerElm.querySelector('.title-group')
const headerTimeElm = headerElm.querySelector('.time')
const headerShiftElm = headerElm.querySelector('.shift')

let oldMenuTitle = ["Bảo Trì Điện Lò Cao"]
let currentPage = []
let data = []
let levelId = []
let info = {}
let dateCheck = 220714
let today = "19/07/2022"
let shift = "Ca D"

// fetch('http://localhost:3000/data')
fetch('https://api.jsonbin.io/v3/b/62d610f74d5b061b1b579543/latest')
.then(function(result){
    return result.json()
})
.then(function(result){
    console.log(result)
    console.log(result.record.data)
    data = result.record.data //xử lý cấu trúc của https://api.jsonbin.io (trả về data = result khi dùng localhost API)
    makeInfoObject(data)
    renderGroupMenu(data)

})
.catch((err)=>{console.log("catch" ,err)})

// renderGroupMenu(dataMain)
function renderGroupMenu(data){
    var htmlRaw = data.map((crr, index)=>{     
    var infoRender = getInfo(info, "group", [crr.id,""] , dateCheck)
    var persent = Math.round((infoRender[3]/infoRender[4])*100)>=0? Math.round((infoRender[3]/infoRender[4])*100):0
        return `<div class="group-menu_wrap" data-index="${crr.id}">
                    <span class="title">${crr.description}</span>
                    <span class="detail">( ${infoRender[0]} Warn; ${infoRender[1]} cảnh báo; checked ${infoRender[3]}/${infoRender[4]} )</span>
                    <span class="present">${persent}%</span>
                </div>`
    })
    groupMenuElm.innerHTML = htmlRaw.join("")
    groupMenuElm.style.paddingTop = headerElm.offsetHeight + "px"
    menuDisplay("group")
    
}


function renderAreaMenu(input, idGroup, description){
    var htmlRaw = `<h3>Không Có Dữ Liệu</h3>`
    input.forEach((crrGroup, index)=>{
        if(crrGroup.id === idGroup[0] && typeof(crrGroup.array) != "undefined"){
            htmlRaw = (crrGroup.array.map((crrArea, index)=>{
            var infoRender = getInfo(info, "area", [idGroup, crrArea.id] , dateCheck)
            var persent = Math.round((infoRender[3]/infoRender[4])*100)>=0? Math.round((infoRender[3]/infoRender[4])*100):0
                return `<div class="area-menu-wrap" data-index="${crrArea.id}" persent="${persent}">
                            <div class="area-name_wrap" >
                                <h4 class="name">${crrArea.description}</h4>
                                <p class="issue">( ${infoRender[0]}  Warn; ${infoRender[1]}  Error; checked ${infoRender[3]} /${infoRender[4]}  mục )</p>
                            </div>
                            <span class="persent" ">${persent}%</span>
                        </div>`
            })).join("") 
        }
    })
    areaMenuElm.innerHTML = htmlRaw
    areaMenuElm.style.paddingTop = headerElm.offsetHeight + "px"
    headerTitleElm.innerText = description
    oldMenuTitle.push(oldMenu) //đưa tiêu đề menu cũ vào mảng
    menuDisplay("area")
    const areaPresentElm = document.querySelectorAll('div.area-menu-wrap')
    areaPresentElm.forEach(element => {
        let persent = element.getAttribute('persent')
        setInterval(() => //delay tao hiệu ứng
        {
            element.style.setProperty('--persent', persent + "%")
            if(persent<=30)
            {
                element.style.setProperty('--color', 'red')
            }
            else if(30<persent && persent<=70)
            {
                element.style.setProperty('--color', 'yellow')
            }
            else
            {
                element.style.setProperty('--color', 'green')
            }
        }, 100);
        
    });
    

}

function renderEquipmentMenu(input, idArea, description, oldMenu){
    var htmlRaw = `<h3>Không Có Dữ Liệu</h3>`
    input.filter((crrGroup, index)=>{
        if(crrGroup.id === idArea[0] && typeof(crrGroup.array) != "undefined"){ //Nhóm -group
            crrGroup.array.filter((crrArea, index)=>{
                if(crrArea.id === idArea[1] && typeof(crrArea.array) != "undefined"){ //khu vưc -Area
                    htmlRaw = (crrArea.array.map((crrEquip, index)=>{ //Equipment
                        return `<div class="equipment-menu-wrap item-${crrEquip.id}" data-index:"${crrEquip.id}">
                                    <span class="name">${crrEquip.description}</span>
                                    ${(crrEquip.array.map((crrContent, index)=>{ //content
                                        return `<div class="wrap-content" data-index:"${crrContent.id}>
                                                    <span class="detail">${crrContent.description}</span>
                                                    ${contentHandel(crrContent)}   
                                                </div>`
                                    }
                                    )).join("")} 
                                </div>`
                    })).join("")
                }
            })   
        }
                
    })
    equipmentMenuElm.innerHTML = htmlRaw
    equipmentMenuElm.style.paddingTop = headerElm.offsetHeight + "px"
    headerTitleElm.innerText = description
    oldMenuTitle.push(oldMenu) //đưa tiêu đề menu cũ vào mảng
    menuDisplay("equipment")
}

function contentHandel(input){
    let html = "Error (Không tìm thấy dữ liệu)"
    if(typeof(input.type) != "undefined")
    {
        switch(input.type[0]){
            case "check":{
                html = `<div class="check">
                                <label class="check_name">${input.type[1]}
                                    <input type="radio" class="check_radio" name="item-${input.id}_check-${input.id}">
                                </label>
                                <label class="check_name">${input.type[2]} 
                                    <input type="radio" class="check_radio" name="item-${input.id}_check-${input.id}">
                                </label>
                        </div> `
                break;
            }
            case "typing":{
                let htmlTemp = ""
                    for(let i =1; i<= input.type.length-1; i++){
                        htmlTemp += `<label class="typing_name">${input.type[i]}
                                        <input type="number" class="typing_input" >
                                    </label>`
                    }
                html = `<div class="typing">${htmlTemp}</div> `
                break;
            }
        }
    }
    return html
}

function menuDisplay(string, backTitle){
    switch (string) {
        case "group":
            {
                groupMenuElm.style.display = "block"
                areaMenuElm.style.display = "none"
                equipmentMenuElm.style.display = "none"
                currentPage= ["group"]
            }break;
         case "area":
            {
                groupMenuElm.style.display = "none"
                areaMenuElm.style.display = "block"
                equipmentMenuElm.style.display = "none"
                currentPage= ["area","group"]
            }break;
         case "equipment":
            {
                groupMenuElm.style.display = "none"
                areaMenuElm.style.display = "none"
                equipmentMenuElm.style.display = "block"
                currentPage= ["equipment","area","group"]
            }break;
    }
    if (backTitle)
    {
        console.log("menu", oldMenuTitle)
        if(oldMenuTitle.length>=2)
        {
            if(oldMenuTitle[oldMenuTitle.length - 1] != headerTitleElm.innerText && oldMenuTitle != undefined )
                {   headerTitleElm.innerText = oldMenuTitle[oldMenuTitle.length - 1]
                    oldMenuTitle.pop()
                }
        }else
        {
            headerTitleElm.innerText = oldMenuTitle[0]
        }
    }   
}

function handleEven(){
    groupMenuElm.onclick = (e)=>{
        const idItemClick = e.target.closest('.group-menu_wrap').getAttribute("data-index")
        const description = e.target.closest('.group-menu_wrap').querySelector('.title').innerText
        levelId = [idItemClick]
        oldMenu = headerTitleElm.innerText  //lưu tiêu đề của menu Cha
        renderAreaMenu(dataMain, levelId, description, oldMenu)
    
    }

    arowBackElm.onclick = ()=>{
        currentPage.length>=2? menuDisplay(currentPage[1], oldMenuTitle):""
    }

    areaMenuElm.onclick = (e)=>{
        const idItemClick = e.target.closest('.area-menu-wrap').getAttribute("data-index")
        const description = e.target.closest('.area-menu-wrap').querySelector('.name').innerText
        var levelIdTemp = [levelId[0], idItemClick]
        levelId = levelIdTemp
        oldMenu = headerTitleElm.innerText  //lưu tiêu đề của menu Cha
        renderEquipmentMenu(dataMain, levelId, description, oldMenu)
        
    
    }
}
handleEven()






//get info

function makeInfoObject(inputData){
    for(let valueGroup of inputData) //group
    {   
        for(let key in valueGroup) //id group
        {
            if(key === "id"){
                info[`groupId-${valueGroup[key]}`] = {}
                if(valueGroup.array){ //array area
                    for(let valueArea of valueGroup.array ){ //area
                        for(let keyArea in valueArea) //id area
                        {   
                            if(keyArea === "id")
                                { 
                                info[`groupId-${valueGroup[key]}`][`areaId-${valueArea[keyArea]}`] = []
                                if(valueArea.array) //aray equipment
                                    { 
                                    for(let valueEquipment of valueArea.array ) //equipment
                                        { 
                                            for(let keyEquipment in valueEquipment) //id equipment
                                            {   
                                                if(keyEquipment === "id")
                                                    {   
                                                        if(valueEquipment.array) //aray content
                                                        { 
                                                            for(let valueContent of valueEquipment.array ) //content
                                                                { 
                                                                    info[`groupId-${valueGroup[key]}`][`areaId-${valueArea[keyArea]}`].push(valueContent.result)
                                                                    // for(let keyContent in valueContent) //id content
                                                                    // {

                                                                    // } 
                                                        }
                                            }
                        
                                             
                                        }
                                    }
                                 }  
                        }
                    }
                }
            }

        }
    }
        }}
}


// check info


function getInfo(inputObject, level, id, date)
{
    let total = 0
    let checked = 0
    let warn = 0
    let error = 0
    let normal = 0
    const keyGroup = `groupId-${id[0]}`
    const keyArea = `areaId-${id[1]}`
    switch (level) 
    {
        case "group": 
        {   
            
            for( let keyArea in inputObject[keyGroup])
            {   
                total += inputObject[keyGroup][keyArea].length
                if(inputObject[keyGroup][keyArea])
                {
                    for(let resultObject of inputObject[keyGroup][keyArea])
                    {
                        if(resultObject && resultObject[date])
                        {
                            switch(resultObject[date][0])
                            {
                                case "ok":{checked ++; normal ++; break;}
                                case "warn":{checked ++; warn ++; break;}
                                case "error":{checked ++; error ++; break;}
                                default:
                            }
                        }
                        
                    }
                }
            }break;
        }
        case "area": 
        {  
            
            dataGroup = inputObject[keyGroup]  
            total += dataGroup[keyArea].length
                if(dataGroup[keyArea])
                {
                    for(let resultObject of dataGroup[keyArea])
                    {
                        if(resultObject && resultObject[date])
                        {
                            switch(resultObject[date][0])
                            {
                                case "ok":{checked ++; normal ++; break;}
                                case "warn":{checked ++; warn ++; break;}
                                case "error":{checked ++; error ++; break;}
                                default:
                            }
                        }
                        
                    }
                }
            break;
        }
    }
    return [warn, error , normal, checked , total]
}

//init
function initApp()
{
    //get time today

    //get shift

    //render date and sheet
    headerTitleElm.innerText = oldMenuTitle[0]
    headerTimeElm.innerText = today
    headerShiftElm.innerText = shift

}
initApp()