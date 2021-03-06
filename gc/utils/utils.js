var krpano = null;
var currentGuide = 0;
var otherEntry = false;
var _audio = document.createElement('audio');
var _audioIndex = 0;
var canPlay = false;
var profilePark = '';
var selectMode = '';
var isHideProfile = false; // 第一场景内公园介绍的跳过
var bgSoundStatus = false;

function krpano_onready_callback(krpano_interface) {
  krpano = krpano_interface;
  console.log(krpano)



  // krpano.call("showlog()");
}

function actionName(action, ...args) {
  _[action](...args);
}

function GetHotspot(ath, atv) {
  console.log(ath, atv)
}

// 监听屏幕转动
// window.addEventListener('orientationchange',function(){
// 	// 这个时候屏幕的尺寸数据还没有变化
// 	var orientation = window.orientation;
//     switch(orientation){
//         case 90:
//         case -90:
//             console.log(orientation)
//             orientation = 'landscape'; //这里是横屏 
//             // if(isShowIntro){
//             //   _.initIntro();
//             // }
//             break;
//         default:
//             console.log(orientation)
//             orientation = 'portrait';//竖屏
//     }
// });


//帮助类库 - 函数式编程
(function () {
  //判断环境
  var root =
    (typeof self == "object" && self.self === self && self) ||
    (typeof global == "object" && global.global === global && global) ||
    this ||
    {};

  var ArrayProto = Array.prototype; //为缓存 防止多次调用
  var push = ArrayProto.push;

  var data = {
    sceneList: [
      {
        id: 1,
        src: 'panos/01_________.tiles/thumb.jpg',
        // name:'主入口',
        name: '垃圾分类回收及资源化利用',
        scene: 'scene_01_________'
      },
      // {
      //     id: 2,
      //     src:'panos/02_______________.tiles/thumb.jpg',
      //     name:'主入口广场',
      //     scene:'scene_02_______________'

      // },
      // {
      //     id: 3,
      //     src:'panos/04____________.tiles/thumb.jpg',
      //     name:'观景平台',
      //     scene:'scene_04____________'

      // },
      {
        id: 4,
        src: 'panos/07____________.tiles/thumb.jpg',
        // name:'娱乐广场',
        name: '碳汇林',
        scene: 'scene_07____________'

      },
      {
        id: 5,
        src: 'panos/08__________________.tiles/thumb.jpg',
        // name:'南侧入口广场',
        name: '低碳再生建材',
        scene: 'scene_08__________________'

      },
      // {
      //     id: 6,
      //     src:'panos/14_____________________.tiles/thumb.jpg',
      //     name:'西侧次入口广场',
      //     scene:'scene_14_____________________'

      // },
      // {
      //     id: 7,
      //     src:'panos/15____________.tiles/thumb.jpg',
      //     name:'阳光草坪',
      //     scene:'scene_15____________'

      // },
      {
        id: 8,
        src: 'panos/1001_______________.tiles/thumb.jpg',
        // name:'低碳公共卫生间',
        name: '低碳公共卫生间',
        scene: 'scene_1001_______________'

      },
      {
        id: 9,
        src: 'panos/1002____________.tiles/thumb.jpg',
        // name:'太阳能板',
        name: '太阳能光伏发电系统',
        scene: 'scene_1002____________'
      },
      {
        id: 10,
        src: 'panos/1001_______________.tiles/thumb.jpg',
        // name:'配电系统',
        name: '“光储直柔”低碳电力新型配电系统',
        scene: 'scene_1003____________'
      }, {
        id: 11,
        src: 'panos/07____________.tiles/thumb.jpg',
        // name:'灌溉系统',
        name: '中水雨水绿化灌溉系统',
        scene: 'scene_1004____________'
      },
    ],
    profile: [
      {
        id: 'profile-1',
        name: '昊天碳中和公园介绍',
        list: [
          {
            content: `
              <h1><span>昊天碳中和公园介绍</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">昊天碳中和公园位于北京市房山区拱辰街道，总面积约6.4公顷，绿化面积5公顷。2021年4月，拱辰街道引入了“碳中和技术创新挑战赛”，以生态环境提升项目为依托，面向全社会征集和招募优秀低碳、零碳技术解决方案，以展示绿色低碳技术在城市高质量发展中的应用潜力，打造全国首个全生命周期碳中和公园。</div>
                    <div class="text">公园建设遵循施工零废弃物、运营零废弃物、利用可再生能源、消耗近零新水和鼓励公众参与这五大低碳设计理念，通过创造性地整合二十余项绿色低碳技术，可减少公园全生命周期70%的碳排放量。建成后，公园可实现近零碳排放运营，种植的树木年均可吸收二氧化碳近50吨<i style="font-size:12px;vertical-align: super;transform: scale(0.8);">（1）</i>。</div>
                    <div class="text">昊天碳中和公园是一座集生态、科技与文娱休闲为一体的碳中和特色公园。公园设有线上虚拟展厅、实景应用展示、电子信息系统等设施，不仅为附近居民提供了休憩场所，也是一个科普碳中和知识、倡导低碳生活、展示推广低碳技术的综合性平台。</div>
                    <div class="text">碳中和技术创新挑战赛由EDF美国环保协会、北京环丁环保大数据研究院（“环丁联盟”）、中国环境科学学会生态环境大数据专委会联合发起，旨在携手地方城市、创新型企业和团队，探索经济社会发展的重点领域（包括能源、工业、农业、林业、交通、商业、酒店餐饮、居民生活等）具有推广应用前景的零碳创新技术产品、解决方案及典型案例，促进产学研融合与交流，储备一批可复制可推广的零碳技术应用模式、实施路径和示范项目，探索科技前沿、经济可行、应用潜力高的零碳技术路径，为实现碳减排和碳中和目标助力。</div>

                    <br />
                    <br />
                    <div class="dot">注释</div>
                    （1）在25年计入期内
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          },
          {
            content: `
                <h2 style="opacity:0;"><span>昊天碳中和公园介绍</span><p>英文标题</p></h2>
                <div class="content swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="./images/profile-1/pic1.png" videoSrc="./images/profile-1/video1.mp4" />
                        <div class="icon-play"></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-scrollbar"></div>
                </div>
              `
          },
          {
            content:``
          },
          {
            content:``
          }
        ]
      },
      {
        id: 'profile-2',
        name: '太阳能光伏发电系统',
        list: [
          {
            content: `
              <h1><span>太阳能光伏发电系统</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">太阳能光伏发电系统总装机容量约为98千瓦（kWp），预计年平均发电量为11.2万度（kWh），25年寿命期的碳减排量约为1685吨二氧化碳当量（CO<sub>2</sub>e）。光伏阵列按照“30·60”样式铺设。</div>
                    <div class="img"><img src="./images/profile-2/pic1.jpg" /></div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          },
          {
            content: `
              <h1 style="opacity:0;"><span>太阳能光伏发电系统</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      选用的光伏板产品电效益优异，组件长期可靠，组件效率20.9%。 <br />
                        -	可适配超大型地面电站发 <br />
                        -	多种先进技术提升组件功率、效率 <br />
                        -	有意的户外发电表现 <br />
                        -	高品质保证组件长期可靠性 <br />
                    
                    </div>
                    <div class="img"><img src="./images/profile-2/pic2.jpeg" /></div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          },{
            content:``
          },{
            content:``
          }
        ]
      },
      {
        id: 'profile-3',
        name: '“光储直柔”低碳电力新型配电系统',
        list: [
          {
            content: `
              <h1><span>“光储直柔”低碳电力新型配电系统</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">“光储直柔”是一种基于直流的智慧能源管理系统，由功率配控单元（实现用电负载柔性调整）、光伏阵列、电动汽车充电桩（利用电动汽车动力电池组进行电能可控迁移）和直流用电设备组成。“光储直柔”能解决光伏发电功率与终端用电功率变化的不同步性问题，实现高效友好消纳。光储直柔智能配电系统与市政电网相连接，具备与电网双向互动能力。</div>
                    <div class="img"><img src="./images/profile-3/pic1.jpg" /></div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          },
          {
            content: `
              <h2 style="opacity:0;"><span>“光储直柔”低碳电力新型配电系统</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="img"><img src="./images/profile-3/pic2.jpg" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>                           
              `
          },
          {
            content:``
          },{
            content:``
          }
        ]
      },
      {
        id: 'profile-4',
        name: '环丁零碳不夜亭',
        list: [
          {
            content: `
              <h1><span>环丁零碳不夜亭</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">环丁零碳不夜亭顶部配置了六块彩色太阳能光伏板，白天吸收光照转化为电能，可为配备的手机充电口、音箱及照明供电。亭子顶部布设低能耗LED灯及光纤照明，顶部内侧印制了孩子们创作的低碳画作，宣传了低碳环保理念。亭子桌面有两个无线充电端口，立柱设置有4个充电插口，为公众提供便利。亭子主要结构均使用再利用材料，亭子基座使用再生水泥，座椅由园林废弃物制成。亭子采用模块化设计，方便组装、拆卸、移动。</div>
                    <div class="img"><img src="./images/profile-4/pic1.png" /></div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }
        ]
      },
      {
        id: 'profile-5',
        name: '户外太阳能灯',
        list: [
          {
            content: `
              <h1><span>户外太阳能灯</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">白天太阳能电池板受到光照给蓄电池充电，晚上光感装置自动控制放电，点亮灯泡。产品充满电后可持续照明8-10小时，且防水防热，无需人工控制和安装电线。公园使用了太阳能园林装饰灯，太阳能感应灯，分体式太阳能灯三种类型的产品。</div>
                    <div class="img"><img src="./images/profile-5/pic1.png" /></div>                  
                    <div class="img"><img src="./images/profile-5/pic2.png" /></div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>                 
              `
          }
        ]
      },
      {
        id: 'profile-6',
        name: '低碳公共卫生间',
        list: [
          {
            content: `
              <h1><span>低碳公共卫生间</span><p>Low-carbon Public Restrooms</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">低碳公共卫生间采用污水可再生自循环利用系统、导光管采光技术、太阳能供热+空气源热泵技术、高效节水器具、木塑复合材料等多项技术和产品，从能源消耗、水资源利用、建材使用等多领域降低资源使用量，提高资源利用效率，最大限度地降低公共卫生间建设及运营期间碳排放量。</div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }, {
            content: `
              <h2><span>污水可再生自循环利用系统</span><p style="opacity:0">英文标题占位</p></h2>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">污水可再生自循环利用系统以中水作为冲厕用水来源，冲厕产生的污水将全封闭消毒处理，经处理达标后暂存，存储的再生水一部分用于冲厕，一部分作为灌溉用水。中水自循环系统的节水效率达95%，每日用水量从6m<sup>3</sup>降低为0.3m<sup>3</sup>，减少碳排放量约为0.4吨/年。污泥量很少，清理周期大约为8~12个月。</div>
                    <div class="img">
                      <img src="./images/profile-6/video1.png" videoSrc="./images/profile-6/1.mp4" />
                      <div class="icon-play"></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }, {
            content: `
              <h2><span>导光管采光技术</span><p style="opacity:0">英文标题占位</p></h2>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公共卫生间照明采用导光管采光系统，白天利用自然光对室内照明。</div>
                    <div class="img"><img src="./images/profile-6/pic1.jpg" /></div>   
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }, {
            content: `
              <h2><span>“太阳能+空气源热泵”供热系统</span><p style="opacity:0">英文标题占位</p></h2>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">卫生间采用太阳能供热+空气源热泵相结合的形式，优先利用太阳能给厕所供暖供热水。在热源不足的情况下，启动空气热泵进行辅助加热。 </div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              
              `
          }, {
            content: `
              <h2><span>高效节水器具</span><p style="opacity:0">英文标题占位</p></h2>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公共卫生间的小便器、蹲便器、坐便器以及水龙头均采用高效节水和非接触式的器具，节水效率最高为70%。【技术提供方：义源（上海）节能环保科技有限公司、西尔拓新（北京）环保科技咨询有限公司】。 </div>
                    <div class="img"><img src="./images/profile-6/pic2.jpg" /></div>
                    <div class="img"><img src="./images/profile-6/pic3.png" /></div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              
              `
          }, {
            content: `
              <h2><span>木塑复合材料</span><p style="opacity:0">英文标题占位</p></h2>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">木塑复合材料以废木料、农作物的剩余物、废旧塑料为原料制作而成，不仅低碳环保还具有防腐、不易变形等优点。卫生间建筑外墙及外埔地面、公园座椅均为木塑复合材料。 </div>
                    <div class="img"><img src="./images/profile-6/pic4.jpg" /></div>
                    <div class="img"><img src="./images/profile-6/pic5.jpg" /></div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }, {
            content: `
            <h2><span>低碳公共卫生间
            </span><p style="opacity:0; ">英文占位</p></h2>
                    
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">

                    <h2><span>中水自循环利用系统</span><p>Reclaimed Water Self-circulation and Utilization System</p></h2>
                    <div class="text">公厕以中水作为冲厕用水来源，冲厕产生污水将全封闭消毒处理，经处理达标后暂存。再生水一部分用于冲厕，一部分作为周边绿化，中水自循环系统的节水效率达95%，每日用水量从6m<sup>3</sup>降低为0.3m<sup>3</sup>，减少碳排放量约为0.4吨/年。污泥量很少，清理周期大约为8~12个月。</div>
                    <div class="textEn">The public restrooms use reclaimed water as the source of flushing water, and the sewage generated from flushing will be fully enclosed for disinfection treatment and temporarily stored after the treatment reaches the standard. Part of the recycled water is used for toilet flushing, and part of it is used for greening around the area. The water saving efficiency of the reclaimed water self-circulation system reaches 95%, and the daily water consumption is reduced from 6m<sup>3</sup> to 0.3m<sup>3</sup>, reducing carbon emission by about 0.4 tons/year. The amount of sludge is very small and the cleaning cycle is about 8~12 months.</div>
                    
                    </br></br>

                    <h2><span>节水器具</span><p>Water-saving Devices</p></h2>
                    <div class="text">小便器、蹲便器、坐便器以及水龙头均采用高效节水和非接触式的器具，节水效率最高为70%。在节约用水的同时，防止交叉感染，助力疫情防控。</div>
                    <div class="textEn">Urinals, squatting toilets, pedestal toilets, and faucets are high-efficiency water-saving and non-contact devices, with a water-saving efficiency of up to 70%. While saving water, they prevent cross-infection and helps prevent and control epidemics.</div>

                    技术提供方： </br>
                    义源（上海）节能环保科技有限公司 </br>
                    西尔拓新（北京）环保科技咨询有限公司     </br>                                                                                                                                                                                                                            
                    Technology provider: </br>
                    Yiyuan (Shanghai) Energy Conservation and Environmental Protection Technology 
                    Co., Ltd. </br>
                    China Environmental Innovators </br>

                    <div class="img">
                      <img src="./images/profile-6/video2.jpg" videoSrc="./images/profile-6/2.mp4" />
                      <div class="icon-play"></div>
                    </div>

                    </br></br>

                    <h2><span>供热系统</span><p>Heating System</p></h2>
                    <div class="text">采用太阳能供热+空气热泵相结合的形式，优先利用太阳能给厕所供暖供热水。在热源不足的情况下，启动空气热泵进行辅助加热，保证室温不低于18℃。</div>
                    <div class="textEn">The combination of solar heating and air heat pumps is used to give priority to using solar energy to heat and supply hot water to the restrooms. In case of insufficient heat source, the air heat pumps are activated for auxiliary heating to ensure that the room temperature is not lower than 18℃.</div>

                    </br></br>
                    
                    <h2><span>建筑材料</span><p>Building Materials</p></h2>
                    <div class="text">建筑外墙面装饰材料由木塑复合材料制作而成。坡道、台阶、散水等利用再生混凝土、再生砖等材料安装制作，再生建材的碳排放量可忽略不计。
                    </div>
                    <div class="textEn">The decoration materials of exterior walls of buildings are made from wood-plastic composites. Ramps, steps and apron slopes are installed and made with recycled concrete and recycled bricks, etc. The carbon emission from recycled building materials is negligible.
                    </div>

                    <div class="img">
                      <img src="./images/profile-6/pic13.JPG"/>
                    </div>

                    <h2><span>照明系统</span><p>Lighting System</p></h2>
                    <div class="text">室内照明采用导光管采光系统，在白天的时候，利用自然光进行室内照明。在光照不足的时候，启用LED照明灯。每日节约用电量约40kWh，减少碳排放量8.8吨/年。</div>
                    <div class="textEn">A light pipe lighting system is adopted for indoor lighting, and natural light is used for indoor lighting during the daytime. In times of insufficient light, LED illuminating lights are activated. The daily electricity saved is about 40kWh and carbon emission is reduced by 8.8 tons/year.
                    </div>

                    <div class="img">
                      <img src="./images/profile-6/pic14.JPG"/>
                    </div>

                    </br></br>

                    <h2><span>除臭系统</span><p>Deodorization System</p></h2>
                    <div class="text">内置除菌除臭材料，同时集成LED灯和小功率空气流通扇，在除臭除菌的同时，具备照明和通风功能。与传统除臭装置相比，能耗最高可降低70%。
                    </div>
                    <div class="textEn">The restrooms are equipped with built-in sterilization and deodorization materials, and integrated with LED lights and small-power air circulation fans, which serve the functions of lighting and ventilation while sterilizing and deodorizing. Compared with traditional deodorization devices, energy consumption can be reduced by up to 70%.
                    </div>

                    技术提供方： </br>
                    义源（上海）节能环保科技有限公司 </br>
                    西尔拓新（北京）环保科技咨询有限公司        </br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

                    Technology provider: </br>
                    Yiyuan (Shanghai) Energy Conservation and Environmental Protection Technology
                    Co., Ltd. </br>
                    China Environmental Innovators </br>
                    <div class="text"></div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }, {
            content: ``
          }, {
            content: ``
          }
        ]
      },
      {
        id: 'profile-7',
        name: '中水雨水绿化灌溉系统',
        list: [
          {
            content: `
              <h1><span>中水雨水绿化灌溉系统</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公园绿化灌溉用水全部来自中水和雨水，通过减少自来水（新水）消耗量，降低水资源利用的隐含碳排放量。中水系统从公园东侧的市政中水管网接入，雨水调蓄池位于公园北侧。</div>
                    <div class="img"><img src="./images/profile-7/pic1.png" /></div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>      
              `
          }
          // ,{
          //   content:`
          //     <a href="./images/profile-7/1.pdf">pdf文档</a>
          //   `
          // }
          // ,{
          //   content:`
          //   <iframe src="./images/profile-7/1.pdf" height=800>
          //   <iframe src="./images/profile-7/2.pdf" height=800>
          //   `
          // }
          // ,{
          //   content:`
          //   <embed src="./images/profile-7/1.pdf" type="application/pdf" height=400>
          //   <embed src="./images/profile-7/2.pdf" type="application/pdf" height=400>
          //   <iframe src="./images/profile-7/1.pdf" height=400>
          //   <iframe src="./images/profile-7/2.pdf" height=400>
          //   `
          // }
        ]
      }, {
        id: 'profile-8',
        name: '低碳再生建材',
        list: [
          {
            content: `
              <h1><span>低碳再生建材</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">再生建材以建筑垃圾等废弃物为原料制作而成，其性能符合施工安全及园林景观设计要求，碳排放量按照其替代的初生原料的碳排放的50%计算。公园道路按照再生水稳垫层、再生混凝土基层、再生砖面层设计铺装。</div>
                    <div class="img"><img src="./images/profile-8/pic1.jpg" /></div>  
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>               
              `
          },
          {
            content: `
              <h1 style="opacity:0;"><span>低碳再生建材</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="img">
                      <img src="./images/profile-8/pic2.png" videoSrc="./images/profile-8/video1.m4v" />
                      <div class="icon-play"></div>
                    </div>  
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>               
              `
          },{
            content:``
          },{
            content:``
          }
        ]

      }, {
        id: 'profile-9',
        name: '建筑垃圾就地消纳',
        list: [
          {
            content: `
              <h1><span>建筑垃圾就地消纳</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公园建设过程中，做到5万方建筑垃圾不外运，全部就地填埋，减少因垃圾运输产生的额外碳排放量。</div>
                    <div class="img"><img src="./images/profile-9/pic1.jpg" /></div>  
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>               
              `
          }
        ]

      }, {
        id: 'profile-10',
        name: '垃圾分类回收及资源化利用',
        list: [
          {
            content: `
              <h1><span>垃圾分类回收及资源化利用</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">智能垃圾箱由太阳能供电，具备语音交互开门、自动称重、满溢监测报警、垃圾分类宣传引导等功能。可回收物由专业技术公司按照废纸、塑料、玻璃、金属、织物五类进行精细化分拣，运至相应利废厂家进行资源化再利用，实现碳减排目标。其他垃圾由市政环卫部门统一进行资源化处理。</div>
                    技术提供方：北京爱分类环境有限公司
                    <div class="img"><img src="./images/profile-10/pic1.jpg" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>      
              
              `
          },
          {
            content: `
              <h1><span>爱分类企业介绍</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">北京爱分类环境有限公司成立于2004年，总部位于中关村科技园，是一家专业从事环境信息化服务与互联网+垃圾分类整体运营解决方案的高新科技企业，构建了前端居民源头简单分类，中端物流高效清运，后端资源利用最大化的垃圾分类全品类全循环全产业链条的服务。</div>
                    技术亮点 <br />
                    <div class="text">公司以现代化互联网技术、智能化物流、车联网技术、AI人工智能分选以及互联网信息化大数据技术为支撑，全面建立起一套完整的垃圾分类产业生态链。爱分类采用了大数据管理平台，借助地图定位、数据交互技术实现了垃圾量数据统计的可视化。清运的数量、消纳的重量，车辆的定点位都可以做到数据可知，让回收的垃圾可视化，透明化，为政府等相关单位提供决策依据，实现更科学、环保、高效的城市垃圾处理。</div>
                    <div class="text">爱分类用科技改善垃圾分类与处理现状，极大地减少垃圾填埋焚烧量，减少了垃圾处理产生的碳排放量。</div>
                    <div class="img"><img src="./images/profile-10/pic3.jpg" /></div>                
                    <div class="img"><img src="./images/profile-10/pic4.jpg" /></div>                

                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>      
              
              `
          },
          {
            content:`
              <h2><span>企业宣传</span><p  style="opacity:0;">英文标题</p></h2>
              <div class="content swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="./images/profile-10/pic5.png" videoSrc="./images/profile-10/video1.mp4" />
                        <div class="icon-play"></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-scrollbar"></div>
                </div>
              `
          },
          {
            content:`
              <h2><span>媒体报道</span><p style="opacity:0;">英文标题</p></h2>
              <div class="content swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="./images/profile-10/pic6.png" videoSrc="./images/profile-10/video2.mp4" />
                        <div class="icon-play"></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-scrollbar"></div>
                </div>
              `
          },
          {
            content:``
          },
          {
            content:``
          }
        ]

      }, {
        id: 'profile-111',
        name: '园林垃圾资源化处置',
        list: [
          {
            content: `
              <h1><span>园林垃圾资源化处置</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">树枝等园林垃圾被加工成营养土和有机覆盖物，回护花草树木。</div>
                    <div class="img"><img src="./images/profile-11/pic2.jpg" /></div> 
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
              `
          }
        ]

      }, {
        id: 'profile-11',
        name: '碳汇林',
        list: [
          {
            content: `
              <h1><span>碳汇林</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公园绿化面积为5万多平方米，种植苗木2800余株。25年可产生的碳汇量为1236吨（CO<sub>2</sub>e），60年总碳汇量为2293吨（CO<sub>2</sub>e）。</div>
                    <div class="img"><img src="./images/profile-11/pic1.jpg" /></div>  
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>              
              `
          }
        ]

      }, {
        id: 'profile-12',
        name: '自发光路面',
        list: [
          {
            content: `
              <h1><span>自发光路面</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">自发光路面由荧光石和再生混凝土构成。荧光石是一种人工所制造出来的可发光石头，白天吸收各种可见光后，可在夜暗处持续发光12小时以上，并可无限次循环使用，无放射性，被广泛应用于室内外装饰，园林设计等领域。</div>
                    <div class="img"><img src="./images/profile-12/pic1.jpg" /></div>   
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>             
              `
          }
        ]

      }, {
        id: 'profile-13',
        name: '公众参与',
        list: [
          {
            content: `
              <h1><span>公众参与</span><p>英文标题</p></h1>
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公园设置了碳中和展示系统，低碳技术展示牌、科普展板、网上VR展厅、食物与碳足迹廊架彩绘、碳中和海报、此外，将跳房子小游戏与低碳行为结合，从多角度宣传碳中和知识，鼓励公众参与到碳中和行动中来。</div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>   
               
              `
          },
          {
            content: `
              <h2><span>碳中和展示系统</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公园内安装了碳中和进度电子显示屏，可实时查看电量使用情况，水资源用量以及垃圾处理量。</div>
                    <div class="img"><img src="./images/profile-13/pic1.png" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>  
              `
          },
          {
            content: `
              <h2><span>低碳技术展示牌</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">园区内安放了8个低碳技术展示牌，向公众展示技术基本原理和碳减排量。</div>
                    <div class="img"><img src="./images/profile-13/pic2.jpg" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>  
              `
          },
          {
            content: `
              <h2><span>科普展板</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">科普展板通过科学性、知识性相结合的展览形式，宣传低碳文化、倡导低碳生活。</div>
                    <div class="img"><img src="./images/profile-13/pic3.jpg" /></div>                
                    <div class="img"><img src="./images/profile-13/pic4.jpg" /></div>                
                    <div class="img"><img src="./images/profile-13/pic5.jpg" /></div>   
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>               
              `
          },
          {
            content: `
              <h2><span>科普彩绘</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">公园廊架运用科学、低碳、美丽的理念，将碳科普与彩虹廊架结合起来，突出碳中和理念，向公众普及碳知识。</div>
                    <div class="img"><img src="./images/profile-13/pic6.jpg" /></div>                
                    <div class="img"><img src="./images/profile-13/pic7.jpg" /></div>   
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>              
                           
              `
          },
          {
            content: `
              <h2><span>跳房子</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">跳房子包含了九个低碳生活行为，通过科学性、知识性、趣味性相结合的展示形式，宣传低碳文化，倡导绿色低碳生活。</div>
                    <div class="img"><img src="./images/profile-13/pic8.png" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>         
              `
          },
          {
            content: `
              <h2><span>网上VR展厅</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text">用手机扫描二维码即可进入公园VR界面，有语音导览介绍，还可以点击浏览公园技术详情。足不出户也能查看碳中和公园应用的低碳技术。</div>
                    <div class="img"><img src="./images/profile-13/pic9.jpg" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>                           
              `
          },
          {
            content: `
              <h2 style="opacity:0;"><span>网上VR展厅</span><p style="opacity:0">英文标题占位</p></h2>
              
              <div class="content swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="img"><img src="./images/profile-13/pic10.jpg" /></div>                
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>                           
              `
          },
          {
            content: ``
          },
          {
            content: ``
          }
        ]

      }
    ]
  }

  var isGuide = true;

  //函数
  var _ = function (obj) {
    if (obj instanceof _) return obj;

    if (!(this instanceof _)) {
      //of 隐式new
      return new _(obj);
    }

    this._wrapped = obj;
  };

  //框架外的核心业务逻辑 针对项目
  _.throttle = function (fn, wait = 500) {
    let timer;
    return function (...args) {
      if (timer == null) {
        //在500ms内只能点击一次
        //第一次点击 没有timer 给timer赋值
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        return fn.apply(this, args);
      }
    };
  };
  _.getCurrentScene = (args) => {
    if (Array.isArray(args)) {
      //如果是数组 

    } else if (typeof args == 'object') {
      //如果是对象
      args.obj.call("loadscene('scene_park');");

    } else {
      if (args != 'scene_park') {
        document.getElementById('wrapper').style.zIndex = 1;
        document.getElementById('icon-back').style.zIndex = 1;
      }
    }

  }

  // 初始化
  _.init = function () {

    _.initHome(); // 初始化首页
    _.initPrograss(); // 初始化loading页
    _.initRotate(); // 初始化旋转提示
    _.initIntro(); // 初始化首次引导

    var contentSwiperLength = document.querySelectorAll('.content').length;

    for (var i = 0; i < contentSwiperLength; i++) {
      _.contentSwiperInit(document.querySelector('.content-' + i));
    }

    // _.initSwiper();
    // _.initMusic();


  }

  // 场景加载进度
  _.setloading = function (prograss) {
    //console.log(prograss); // 场景加载进度 0 - 1
    if (prograss >= 1) {
      document.getElementById('rotate').classList.add('on');

      if (document.getElementById('loadingbar')) {
        console.log('已存在')
        document.getElementById('loadingbar').remove();
        _.initIntro(canPlay);
      }


    }
  }


  // 修复krpano全屏其它js无效问题。》 使用浏览器自身的全屏 
  _.fullScreen = function () {
    var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen ||
      document.msFullscreenElement || document.fullscreenElement
    );//!document.webkitIsFullScreen都为true。因此用!!
    if (isFull == false) {
      var element = document.documentElement;
      if (element.requestFullscreen) {
        // element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }

    } else {

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }

    }
  }

  _.initHome = function () {
    // 初始化首页
    var homepageWrapper = document.createElement('div');
    homepageWrapper.id = 'homepage';
    homepageWrapper.className = 'homepage';

    var logoWrapper = document.createElement('div');
    logoWrapper.className = 'logo';

    var logo = document.createElement('img');
    logo.src = "./images/logo.png";
    logoWrapper.appendChild(logo);

    var button = document.createElement('div');
    button.className = 'button';

    var a = document.createElement('a');
    a.innerHTML = '点击浏览';
    a.addEventListener('click', function () {
      document.querySelector('.intro').classList.add('on');
      _.loadFullScene();

      canPlay = true;



    })
    button.appendChild(a);

    homepageWrapper.appendChild(logoWrapper);
    homepageWrapper.appendChild(button);

    document.body.appendChild(homepageWrapper);
  }

  _.initPrograss = function () {
    //初始化loading页
    var loadingWrapper = document.createElement('div');
    loadingWrapper.id = 'loadingbar';
    loadingWrapper.className = 'loadingbar';

    var logoWrapper = document.createElement('div');
    logoWrapper.className = 'logo';
    logoWrapper.innerHTML = '即将进入昊天碳中和公园…';

    var loading = document.createElement('div');
    loading.className = 'loading bodymovin';
    loading.setAttribute('data-bm-path', "./animation/data.json")
    loading.setAttribute('data-bm-renderer', "svg")
    loading.setAttribute('loop', true)

    loadingWrapper.appendChild(loading);
    loadingWrapper.appendChild(logoWrapper);

    document.body.appendChild(loadingWrapper);
  }

  _.initRotate = function () {
    // 初始化旋转提示
    var rotate = document.createElement('div');
    rotate.className = 'rotateScreen';
    rotate.id = 'rotate';

    var rotate_icon = document.createElement('div');
    rotate_icon.className = 'icon-rotate';

    var img = document.createElement('img');
    img.src = "./images/icon-rotate.png";

    rotate_icon.appendChild(img);

    var rotate_word = document.createElement('div');
    rotate_word.className = 'rotate_word';
    rotate_word.innerHTML = '请旋转屏幕至横屏查看';

    rotate.appendChild(rotate_icon);
    rotate.appendChild(rotate_word);

    document.body.appendChild(rotate);

  }

  _.initIntro = function (isCanPlay) {
    if (otherEntry) {
      document.querySelector('.intro').classList.remove('on');
      return;
    }
    if (isCanPlay) {

      // 公园介绍音频播放
      // _audio.play();

      // _audio.addEventListener('ended',function(){
      //   document.querySelector("a[data-id='next']").click();
      //   document.querySelector(".intro-swiper-container").classList.add('regular');
      //   console.log('播放结束')
      // })

      // setTimeout(() => {
      //   document.querySelector("a[data-id='next']").click();
      //   document.querySelector(".intro-swiper-container").classList.add('regular');
      // }, 5000000);


      return;
    }
    // 介绍
    var intro = document.createElement('div');
    intro.className = "intro";

    // 上方播放按钮 + 下一步跳过按钮
    var btns = document.createElement('div');
    btns.className = 'icon-buttons';

    var playButton = document.createElement('a');
    playButton.className = 'icon icon-bgSoundPlay';

    playButton.addEventListener('click', function () {
      console.log('播放音频');
      // krpano.call("bgsnd_action(bgsnd);");
      _.bgSoundEvent(true);
    })

    var nextButton = document.createElement('a');
    nextButton.className = 'icon icon-next';

    btns.appendChild(playButton);
    btns.appendChild(nextButton);

    intro.appendChild(btns);

    // 上方按钮增加完毕



    // 左侧引导人员
    var guider = document.createElement('div');
    guider.className = "guider";
    var img = document.createElement('img');
    img.src = "./images/guider.png";

    // 右侧文字展示 + 模式选择按钮 + 跳过按钮
    var container = document.createElement('div');
    container.className = "container";

    // 新增移动端拉出内容
    var intro_swiper = document.createElement('div');
    intro_swiper.className = 'swiper intro-swiper';

    var intro_swiper_wrapper = document.createElement('div');
    intro_swiper_wrapper.className = 'swiper-wrapper';

    // 文字
    var intro_word = document.createElement('div');
    intro_word.className = "intro_word";
    intro_word.innerHTML = "";

    // 模式选择按钮
    var buttons = document.createElement('div');
    buttons.className = 'buttons';

    var buttonList = [
      { id: 0, text: '自动浏览' },
      { id: 1, text: '探索模式' },
      { id: "next", text: '跳过>>' }
    ];

    var wordList = [
      {
        id: 0,
        // text:'昊天碳中和公园位于北京市房山区拱辰街道，总面积约6.4公顷，绿化面积5公顷，是全国首个全生命周期碳中和公园。公园建设遵循施工零废弃物、运营零废弃物、利用可再生能源、消耗近零新水和鼓励公众参与，五大低碳设计理念，通过整合二十余项绿色低碳技术，可减少公园全生命周期70%的碳排放量。建成后，公园可实现近零碳排放运营，种植的树木年均可吸收二氧化碳近50吨。',
        text: [
          {
            title: '昊天碳中和公园',
            innerHTML: '昊天碳中和公园位于北京市房山区拱辰街道，总面积约6.4公顷，绿化面积5公顷。2021年4月，拱辰街道引入了“碳中和技术创新挑战赛”，以生态环境提升项目为依托，面向全社会征集和招募优秀低碳、零碳技术解决方案，以展示绿色低碳技术在城市高质量发展中的应用潜力，打造全国首个全生命周期碳中和公园。公园建设遵循施工零废弃物、运营零废弃物、利用可再生能源、消耗近零新水和鼓励公众参与这五大低碳设计理念，通过创造性地整合十余项绿色低碳技术，可减少公园全生命周期70%的碳排放量。建成后，公园可实现近零碳排放运营，种植的树木年均可吸收二氧化碳近50吨<i style="font-size:12px;vertical-align: super;transform: scale(0.8);">（1）</i>。昊天碳中和公园是一座集生态、科技与文娱休闲为一体的碳中和特色公园。公园设有线上虚拟展厅、实景应用展示、电子信息系统等设施，不仅为附近居民提供了休憩场所，也是一个科普碳中和知识、倡导低碳生活、展示推广低碳技术的综合性平台。'
          },
          {
            subtitle: '<p>用电光储能直柔</p><div class="subtitleEn">PSDF power distribution system</div>',
            innerHTML: '<p class="icon-star">“光储直柔”低碳电力新型配电系统</p>'
          },
          {
            subtitle: '<p>利用可再生能源</p><div class="subtitleEn">Renewable energy utilization<div>',
            innerHTML: '<p class="icon-star">太阳能光伏发电系统</p><p class="icon-star">环丁零碳不夜亭</p><p class="icon-star">户外太阳能灯</p><p class="icon-star">导光管采光技术</p><p class="icon-star">节能型照明技术</p><p class="icon-star">“太阳能+空气源热泵”供热系统</p><p class="icon-star">自发光路面</p>'
          },
          {
            subtitle: '<p>施工零废弃物</p><div class="subtitleEn">A zero-waste construction process<div>',
            innerHTML: '<p class="icon-star">建筑垃圾就地消纳</p><p class="icon-star">低碳再生建材</p><p class="icon-star">木塑复合材料</p>'
          },
          {
            subtitle: '<p>运营零废弃物</p><div class="subtitleEn">Zero-waste operations<div>',
            innerHTML: '<p class="icon-star">垃圾分类回收及资源化利用</p><p class="icon-star">园林垃圾资源化处置</p>'
          },
          {
            subtitle: '<p>消耗近零新水</p><div class="subtitleEn">Near-zero new water (tap water) consumption<div>',
            innerHTML: '<p class="icon-star">中水雨水绿化灌溉系统</p><p class="icon-star">污水可再生自循环利用系统</p><p class="icon-star">高效节水器具</p>'
          },
          {
            subtitle: '<p>鼓励公众参与</p><div class="subtitleEn">Public engagement<div>',
            innerHTML: '<p class="icon-star">网上VR展厅</p><p class="icon-star">碳中和展示系统</p><p class="icon-star">低碳技术展示牌</p><p class="icon-star">科普展板</p><p class="icon-star">科普彩绘</p><p class="icon-star">碳中和小游戏-跳房子</p>'
          }
        ],
        audio: ''
      },
      {
        id: 1,
        text: '欢迎来到昊天碳中和公园，请选择游览模式',
        audio: ''
      }
    ]

    profilePark = wordList[0].text[0].innerHTML;
    selectMode = wordList[1].text;

    var currentIndex = 0;
    // intro_word.innerHTML = wordList[currentIndex].text;
    // 按设计稿重新进行UI设计

    var introText = wordList[currentIndex].text;
    for (var ii = 0; ii < introText.length; ii++) {
      var intro_swiper_slide = document.createElement('div');
      intro_swiper_slide.className = 'swiper-slide';


      if (introText[ii].title) {
        var swiper_title = document.createElement('div');
        swiper_title.className = 'title';
        var swiper_img = document.createElement('img');
        swiper_img.src = 'images/swiper-title.png';
        swiper_title.appendChild(swiper_img);
      } else {
        var swiper_title = document.createElement('div');
        swiper_title.className = 'title';
        swiper_title.innerHTML = introText[ii].title || '';
      }

      intro_swiper_slide.appendChild(swiper_title);

      if (introText[ii].subtitle) {
        var swiper_subtitle = document.createElement('div');
        swiper_subtitle.className = 'subtitle';
        swiper_subtitle.innerHTML = introText[ii].subtitle || '';
        intro_swiper_slide.appendChild(swiper_subtitle);
      }




      // 公园介绍 swiper
      var swiper_content = document.createElement('div');
      swiper_content.className = 'content swiper';
      swiper_content.classList.add('content-' + ii);
      // swiper_content.innerHTML = introText[ii].innerHTML || '';

      // 公园介绍 swiper-wrapper
      var swiper_content_wrapper = document.createElement('div');
      swiper_content_wrapper.className = 'swiper-wrapper';

      // 公园介绍 swiper-slide
      var swiper_content_wrapper_slide = document.createElement('div');
      swiper_content_wrapper_slide.className = 'swiper-slide';

      var swiper_content_wrapper_slide_text = document.createElement('div');
      swiper_content_wrapper_slide_text.className = 'swiper-text';
      swiper_content_wrapper_slide_text.innerHTML = introText[ii].innerHTML || '';

      swiper_content_wrapper_slide.appendChild(swiper_content_wrapper_slide_text)

      // 公园介绍滚动条
      var swiper_scrollbar = document.createElement('div');
      swiper_scrollbar.className = 'swiper-scrollbar';

      swiper_content_wrapper.appendChild(swiper_content_wrapper_slide);
      swiper_content.appendChild(swiper_content_wrapper);
      swiper_content.appendChild(swiper_scrollbar);


      // var mySwiper = new Swiper(swiper_content, {
      //   // direction: "vertical",
      //   // slidesPerView: "auto",
      //   // freeMode: true,
      //   scrollbar: {
      //     el: ".swiper-scrollbar",
      //   },
      //   mousewheel: true,
      //   mousewheelControl: true,    //鼠标滚轮
      //   freeMode: false, // slide 是否贴合侧边
      //   roundLengths : true, //防止文字模糊
      //   observer:true,
      //   observeParents:true
      // });
      // console.log(mySwiper);
      // console.log(mySwiper.slides.length);


      intro_swiper_slide.appendChild(swiper_content);
      intro_swiper_wrapper.appendChild(intro_swiper_slide);
      container.classList.add('intro-swiper-container');

    }


    intro_swiper.appendChild(intro_swiper_wrapper);

    // 动态绑定公园介绍的轮播
    if (window.innerWidth <= 960) {

      setTimeout(() => {
        var swiper = new Swiper(".intro-swiper", {
          slidesPerView: 2.5,
          spaceBetween: 14,
          observer: true,  //开启动态检查器，监测swiper和slide
          observeParents: true,  //监测Swiper 的祖/父元素
          on: {
            init: function () {
              // console.log(result.list.length)
              // 公园介绍共5个板块
              console.log('公园介绍初始化成功')




            }
          }
        });





      }, 400);

    }



    // setTimeout(() => {
    //   for (var i = 0; i < 5; i++) {
    //     (function(i){
    //       console.log(".content-" + i)
    //       var swiperContent = new Swiper(".content-" + i, {
    //         direction: "vertical",
    //         slidesPerView: "auto",
    //         // freeMode: true,
    //         scrollbar: {
    //           el: ".content-" + i + " .swiper-scrollbar",
    //         },
    //         mousewheel: true,
    //         observer:true,//修改swiper自己或子元素时，自动初始化swiper
    //         observeParents:true,//修改swiper的父元素时，自动初始化swiper
    //       });
    //     })(i)
    //   }
    // }, 400);


    container.appendChild(intro_swiper);



    for (var i = 0; i < buttonList.length; i++) {
      var A = document.createElement('a');
      A.innerHTML = buttonList[i].text;
      A.setAttribute('data-id', buttonList[i].id);
      buttons.appendChild(A);

      (function (btn, index) {
        btn.addEventListener('click', function () {
          console.log('a ', index, buttonList[index]);
          console.log(otherEntry)
          if (buttonList[index].id == 'next' && isHideProfile) {
            // 当前为公园介绍内的跳过按钮
            document.querySelector('.intro').classList.remove('on');
            otherEntry = true; //表示已经完成第一次引导 或者从其他入口进入return;
          }

          if (currentIndex < wordList.length - 1) {
            currentIndex++;
          }

          nextIntro(intro_word, wordList[currentIndex].text);

          if (currentIndex == wordList.length - 1) {
            buttons.classList.add('on');
            // 暂停播放
            _audio.src = '';
          }

          if (buttonList[index].id == 0) {
            // 自动浏览模式
            document.querySelector('.intro.on').classList.remove('on');
            _.autoPlay();
          } else if (buttonList[index].id == 1) {



            document.querySelector('.intro.on').classList.remove('on');
            // 探索模式
            _.play();
          }


        });
      })(A, i);

    }

    nextButton.addEventListener('click', function () {
      document.querySelector("a[data-id='next']").click();
      document.querySelector(".intro-swiper-container").classList.add('regular');
      this.remove();
    })

    // 公园介绍音频加载
    // _audio.src = './audio/0.mp3';
    document.body.appendChild(_audio);





    guider.appendChild(img);

    container.appendChild(intro_word);
    container.appendChild(buttons);

    intro.appendChild(guider);
    intro.appendChild(container);

    document.body.appendChild(intro)

    function nextIntro(obj, string) {
      obj.innerHTML = string;
    }



  }

  _.autoPlay = function () {
    // 自动浏览模式
    console.log('播放视频');
  }

  _.play = function () {
    // 探索模式
    if (!otherEntry) {
      console.log('第一次强制引导');
      _.guideScene(currentGuide, false)
    }
  }

  _.guideScene = function (current, isHide) {
    if (isHide) {
      document.querySelector('.guide-layer').remove();
    }
    currentGuide++;

    var guideLayer = document.createElement('div');
    guideLayer.className = 'guide-layer  on';

    var guideBg = document.createElement('div');
    guideBg.className = 'guide-bg';

    var guide = document.createElement('div');
    guide.className = 'guide';

    var guideBackground = document.createElement('div');
    guideBackground.className = 'guideBackground';



    var guideDiv = document.createElement('div');
    guideDiv.className = 'guide guide-click-layer';

    var guideIcon = document.createElement('div');
    guideIcon.className = 'icon-guide';

    var guideHTML = document.createElement('div');
    guideHTML.innerHTML = '点击选择场景';

    var introduce = document.createElement('div');
    introduce.className = 'introduce';
    introduce.innerHTML = '欢迎来到昊天碳中和公园参观，点击此处可切换任意场景';

    var guider = document.createElement('div');
    guider.className = 'guider';

    var img = document.createElement('img');
    img.src = './images/guider.png';
    guider.appendChild(img);

    document.body.appendChild(guideLayer);

    guideLayer.appendChild(guideBg);

    guideIcon.appendChild(guideHTML);
    guideLayer.appendChild(guide);
    guideLayer.appendChild(guideIcon);
    guideLayer.appendChild(guideDiv);
    guideLayer.appendChild(introduce);
    guideLayer.appendChild(guider);
    switch (current) {
      case 0:
        guideLayer.classList.add('guide-first');

        guideDiv.addEventListener('click', function () {
          // document.querySelector('.guide-layer').remove();



          _.loadFullScene(true, "scene_01______");
          _.guideScene(currentGuide, true);
        })
        break;
      case 1:
        guideLayer.classList.add('guide-next');
        console.log('播放欢迎来到场景1音频');
        // 假设3s后播放音频完毕
        setTimeout(() => {
          _.guideScene(currentGuide, true)
        }, 2000);
        break;
      case 2:
        // guideLayer.classList.add('guide-next');
        guideLayer.classList.add('guide-next2');
        // introduce.innerHTML = '点击此处可详细查看技术热点';

        // document.querySelector('.guide-layer').remove();
        console.log('播放点击热点音频');

        // var img = 

        // 假设3s后播放音频完毕
        // setTimeout(() => {
        //   _.guideScene(currentGuide,true)
        // }, 300000000);

        guideLayer.addEventListener('click', function () {

          checker.init();
          checker.changePage(2);
          var event = event || window.event;
          var pos = checker.checkPosition(event);
          console.log(pos);
          var choose = checker.checkChoose(event);
          console.log(choose);

        })

        var left = zone['2']['a']['lt'].split(',')[0] * document.body.clientWidth;
        var w = zone['2']['a']['rb'].split(',')[0] * document.body.clientWidth - left;
        var top = zone['2']['a']['lt'].split(',')[1] * document.body.clientWidth;

        guide.style.left = left + 'px';
        guide.style.top = top + 'px';

        guideDiv.style.left = left + 'px';
        guideDiv.style.top = top + 'px';
        guideDiv.style.width = w + 'px';
        guideDiv.style.height = w + 'px';
        guideDiv.style.maxWidth = '120px';
        guideDiv.style.maxHeight = '120px';
        guideDiv.style.display = 'block';

        guideDiv.addEventListener('click', function () {
          _.guideScene(currentGuide, true)
        })
        break;
      default:
        document.querySelector('.guide-layer').remove();

        // 显示第一场景内的公园介绍
        // document.querySelector('.intro').classList.add('on');
        // document.querySelector('.intro').style.background = 'none';
        // document.querySelector('.icon-bgSoundPlay').style.opacity = '0';

        // document.querySelector('.intro_word').innerHTML = profilePark;
        // document.querySelector('.buttons').classList.remove('on');
        isHideProfile = true;



        break;
    }



  }

  _.initSwiper = function () {
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.id = 'wrapper';

    var back = document.createElement('div');
    back.className = 'icon-back';
    back.id = 'icon-back';
    var backA = document.createElement('a');
    backA.addEventListener('click', function () {
      //返回到首页
      document.getElementById('wrapper').classList.remove('on');
      document.getElementById('wrapper').querySelectorAll('.swiper-slide').forEach((slide) => {
        slide.classList.remove('on');
      })

      _.loadFullScene(true);
    });
    back.appendChild(backA);
    document.body.appendChild(back);

    var icon = document.createElement('div');
    icon.className = 'icon-swiper';
    var iconA = document.createElement('a');
    iconA.addEventListener('click', function () {
      _.toggleSwiper();
    });
    icon.appendChild(iconA);

    var swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container';

    var swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';

    data.sceneList.forEach(function (s) {
      var slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.setAttribute('data-scene', s.scene);

      var img = document.createElement('img');
      img.src = s.src;
      var sceneName = document.createElement('div');
      sceneName.className = 'sceneName';
      sceneName.innerHTML = s.name;

      slide.appendChild(img);
      slide.appendChild(sceneName);

      swiperWrapper.appendChild(slide);
    })

    swiperContainer.addEventListener('click', function () {
      var target = event.target || event.srcElement;
      var targetScene = target.parentNode;
      if (target.parentNode.classList.value.split(" ").indexOf('swiper-slide') >= 0) {
        document.getElementById('wrapper').querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.classList.remove('on');
        })
        targetScene.classList.add('on');
        krpano.call("loadscene('" + targetScene.getAttribute('data-scene') + "');");
      }
    })


    // swiperContainer.appendChild(icon);
    swiperContainer.appendChild(swiperWrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(swiperContainer);
    document.body.appendChild(wrapper);
    // _.swiper();
  }

  _.initMusic = function () {
    var audio = document.createElement('audio');
    audio.setAttribute('id', 'audio');
    audio.setAttribute('autoplay', 'autoplay');
    audio.setAttribute('loop', 'loop');
    audio.innerHTML = '<source src="./audio.mp3" type="audio/mpeg" >'
    document.body.appendChild(audio);
    audio.load();
    audio.pause();

    var musicA = document.createElement('span');
    musicA.classList = 'icon-music';
    musicA.addEventListener('click', function () {
      var target = event.target || event.srcElement;
      var cssList = target.classList.value.split(" ");
      if (cssList.indexOf('on') != -1) {
        target.classList.remove('on');
        audio.pause();

      } else {
        target.classList.add('on');
        audio.play();
      }
    })
    document.body.appendChild(musicA);

  }

  _.drawBackground = function () {



    // var canvas = document.createElement("canvas");
    // canvas.width = document.body.clientWidth;
    // canvas.height = document.body.clientHeight;
    // var context = canvas.getContext("2d");
    // // var data = context.getImageData(0, 0, canvas.width, canvas.height);
    // context.drawImage(document.body,0, 0, canvas.width, canvas.height)
    // context.putImageData(data, 0, 0);
    // var img = canvas.toDataURL("image/png");
    // console.log(img)
    // return canvas.toDataURL("image/png");
  }

  _.backtohome = function () {
    // _.init();
    console.log('backtohome');
    document.querySelector('.intro').classList.add('on');
    document.querySelector('.intro_word').innerHTML = selectMode;
    document.querySelector('.buttons').classList.add('on');
  }
  _.bgSoundEvent = function (isFromDocument) {
    console.log('进入背景音乐事件');
    bgSoundStatus = !bgSoundStatus;
    if (bgSoundStatus) {
      // 背景音乐打开状态
      console.log('背景音乐当前打开');
      document.querySelector(".icon-bgSoundPlay").classList.add('active');
    } else {
      // 背景音乐关闭状态
      console.log('背景音乐当前关闭');
      document.querySelector(".icon-bgSoundPlay").classList.remove('active');
    }
    if (isFromDocument) {
      krpano.call("pausesoundtoggle(bgsnd); switch(plugin[snd].crop, 0|360|60|60, 60|300|60|60); switch(plugin[snd].crop, 60|360|60|60, 0|300|60|60);");
    }

  }



  _.swiper = function () {
    var mySwiper = new Swiper('.wrapper .swiper-container', {
      direction: 'horizontal',
      loop: false, // 循环模式选项
      // slidesPerView: 9,
      slidesPerView: 'auto',
      spaceBetween: 12,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }

  _.toggleSwiper = function () {
    var swiper = document.querySelector('.wrapper');
    if (swiper.classList.value.split(" ").indexOf('on') >= 0) {
      document.querySelector('.wrapper').classList.remove('on');
    } else {
      document.querySelector('.wrapper').classList.add('on');
    }
  }





  _.getQueryVariable = function (variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  }

  _.loadFullScene = function (flag, scene) {

    // document.getElementById('wrapper').style.zIndex = -1;
    // document.getElementById('icon-back').style.zIndex = -1;

    if (!flag) {
      // document.getElementById('homepage').style.display = 'none';
      document.getElementById('homepage').remove();
      document.getElementById('loadingbar').classList.add('on');
      // document.querySelector('.intro').classList.remove('on');


      embedpano({ swf: "tour.swf", xml: "tour.xml", target: "pano", html5: "prefer", initvars: { design: "default" }, passQueryParameters: true, onready: krpano_onready_callback });

      window.addEventListener("orientationchange", function () {
        setTimeout(function () {
          krpano.set("fullscreen", false);
          setTimeout(function () {
            krpano.set("fullscreen", true);
          }, 200);
        }, 200);
      }, false);

      window.onresize = function () {
        _.fullScreen();
      }
      return;
    }

    console.log(scene)

    if (scene) {
      krpano.call("loadscene('" + scene + "');");
      return;
    }

    krpano.call("loadscene('scene_park');");


  }

  _.showModal = function (id) {

    // data.profile.forEach(p => {
    //   if (p.id == id) {
    //     _audioIndex = p.id.split('-')[1];
    //     _audio.src = "./audio/" + _audioIndex + '.mp3';
    //     _audio.pause();
    //     console.log('热点对应的swiper', _audioIndex)
    //     _.initModalSwiper(p);
        

    //   }
    // })

    var current = data.profile.filter((p)=>(p.id == id))
    _audioIndex = current[0].id.split('-')[1];
    _audio.src = "./audio/" + _audioIndex + '.mp3';
    _audio.pause();
    console.log('热点对应的swiper', _audioIndex)
    _.initModalSwiper(current[0]);

    var contentSwiperLength = current[0].list.length;
    if(contentSwiperLength >=3 ){
      contentSwiperLength -= 2;
    }
    console.log(contentSwiperLength)
    for (var i = 0; i < contentSwiperLength; i++) {
      if(document.querySelector('.profileWrapper').querySelector('.content-' + i)){
        _.contentSwiperInit(document.querySelector('.profileWrapper').querySelector('.content-' + i));
      }
    }

  }
  _.initModalSwiper = function (result) {
    var profileWrapper = document.createElement('div');
    profileWrapper.className = 'profileWrapper';
    profileWrapper.id = 'profileWrapper';

    var guider = document.createElement('div');
    guider.className = 'guider';

    var guiderImg = document.createElement('img');
    guiderImg.src = './images/guider.png';

    guider.appendChild(guiderImg);


    var icon = document.createElement('div');
    icon.className = 'icon-close';

    var iconA = document.createElement('a');
    iconA.addEventListener('click', function () {
      document.getElementById('profileWrapper').remove();
      // 隐藏背景模糊
      document.getElementById("pano").style.filter = 'none';
      _audio.src = '';
    });

    icon.appendChild(iconA);

    var swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container';

    var swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';

    result.list.forEach((res, index) => {

      var swiperSlide = document.createElement('div');
      swiperSlide.className = 'swiper-slide';
      if (res.content == '') {
        swiperSlide.style.opacity = 0;
        swiperSlide.classList.add('stop-swiping');
      }

      // if(index == 0){
      //   var brand = document.createElement('div');
      //   brand.className = 'brand';
      //   var title = document.createElement('div');
      //   title.className = 'title';
      //   brand.appendChild(title);
      //   swiperSlide.appendChild(brand);
      // }

      var swiperContent = document.createElement('div');
      swiperContent.className = 'swiper-content';



      swiperContent.addEventListener('click', function () {
        var target = event.target || event.srcElement;
        if (target.tagName.toLowerCase() == 'img' && !(target.getAttribute('videosrc') || target.getAttribute('pdfSrc'))) {
          //img
          var imgDiv = document.createElement('div');
          imgDiv.classList = 'imgDiv';

          // var imgDivWrap  = document.createElement('div');
          // imgDivWrap.classList = 'imgDivWrap';

          var img = document.createElement('img');
          img.src = target.src;

          var iconClose = document.createElement('div');
          iconClose.className = 'icon-close';

          var iconCloseA = document.createElement('a');
          iconCloseA.addEventListener('click', function () {


            document.querySelector('.profileWrapper .imgDiv').remove();

            document.querySelector('.profileWrapper .swiper-container').style.zIndex = 1;
            document.querySelector('.profileWrapper .swiper-button-next').style.zIndex = 1;
            document.querySelector('.profileWrapper .swiper-button-prev').style.zIndex = 1;
          });

          // imgDivWrap.appendChild(img);
          // imgDiv.appendChild(imgDivWrap);
          imgDiv.appendChild(img);
          iconClose.appendChild(iconCloseA);
          imgDiv.appendChild(iconClose);

          profileWrapper.appendChild(imgDiv);

          document.querySelector('.profileWrapper .swiper-container').style.zIndex = -1;
          document.querySelector('.profileWrapper .swiper-button-next').style.zIndex = -1;
          document.querySelector('.profileWrapper .swiper-button-prev').style.zIndex = -1;
        } else if (target.tagName.toLowerCase() == 'img' && target.getAttribute('videosrc')) {
          //video
          var imgDiv = document.createElement('div');
          imgDiv.classList = 'imgDiv';


          var video = document.createElement('video');
          video.src = target.getAttribute('videosrc');
          video.controls = 'controls';
          video.autoplay = 'autoplay';
          video.preload = 'true';
          video.setAttribute('x-webkit-airplay', true);
          video.setAttribute('webkit-playsinline', true);
          video.setAttribute('playsinline', true);
          video.setAttribute('x5-video-player-type', true);
          video['x-webkit-airplay'] = 'true';
          video['webkit-playsinline'] = 'true';
          video['playsinline'] = 'true';
          video['x5-video-player-type'] = 'h5';
          video.playsinline = 'true';

          var iconClose = document.createElement('div');
          iconClose.className = 'icon-close';

          var iconCloseB = document.createElement('a');
          iconCloseB.addEventListener('click', function () {

            document.querySelector('.profileWrapper .imgDiv').remove();

            document.querySelector('.profileWrapper .swiper-container').style.zIndex = 1;
            document.querySelector('.profileWrapper .swiper-button-next').style.zIndex = 1;
            document.querySelector('.profileWrapper .swiper-button-prev').style.zIndex = 1;
          });

          imgDiv.appendChild(video);
          iconClose.appendChild(iconCloseB);
          imgDiv.appendChild(iconClose);

          profileWrapper.appendChild(imgDiv);

          document.querySelector('.profileWrapper .swiper-container').style.zIndex = -1;
          document.querySelector('.profileWrapper .swiper-button-next').style.zIndex = -1;
          document.querySelector('.profileWrapper .swiper-button-prev').style.zIndex = -1;
        }
      });


      swiperContent.innerHTML = res.content;

      if (swiperContent.querySelector('.content')) {
        swiperContent.querySelector('.content').classList.add('content-' + index);
      }



      var iconSound = document.createElement('a');
      iconSound.className = 'icon-singleSound mute';
      iconSound.addEventListener('click', function () {

        if (this.className.indexOf('mute') >= 0) {
          _audio.play();
          this.classList.remove('mute');
        } else {
          _audio.pause();
          this.classList.add('mute');
        }
      })

      swiperContent.appendChild(iconSound);


      swiperSlide.appendChild(swiperContent);

      swiperWrapper.appendChild(swiperSlide);


    })


    var swiperButtonPrev = document.createElement('div');
    swiperButtonPrev.className = 'swiper-button-prev';
    var swiperButtonNext = document.createElement('div');
    swiperButtonNext.className = 'swiper-button-next';


    swiperContainer.appendChild(swiperWrapper);


    profileWrapper.appendChild(guider);
    profileWrapper.appendChild(icon);
    profileWrapper.appendChild(swiperContainer);
    profileWrapper.appendChild(swiperButtonPrev);
    profileWrapper.appendChild(swiperButtonNext);
    document.body.appendChild(profileWrapper);
    // 背景增加模糊
    document.getElementById("pano").style.filter = 'blur(2px)';

    // setTimeout(() => {
    //   var swiper = new Swiper(".intro-swiper", {
    //     slidesPerView: 2.5,
    //     spaceBetween: 14,
    //     observer: true
    //   });
    // }, 400);

    var mySwiper = new Swiper('.profileWrapper .swiper-container', {
      slidesPerView: 2.5,
      spaceBetween: 14,
      observer: true,
      noSwiping: true,
      noSwipingClass: 'stop-swiping',


      // 如果需要分页器
      // pagination: {
      // 	el: '.swiper-pagination',
      // },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      // scrollbar: {
      // 	el: '.swiper-scrollbar',
      // },

      on: {
        slideChangeTransitionStart: function () {
          var currentSlide = document.querySelector(".profileWrapper>.swiper-container>.swiper-wrapper>.swiper-slide-active");
          var musicIcon = currentSlide.querySelector(".icon-singleSound");
          if (musicIcon.className.indexOf('mute') == -1) {
            musicIcon.classList.add('mute');
          }
        },
        slideChangeTransitionEnd: function () {
          //this.activeIndex; //切换结束时，告诉我现在是第几个slide
          _audio.src = "./audio/" + _audioIndex + '-' + this.activeIndex + '.mp3';
          _audio.pause();




          // console.log(result.list.length) //当前内容条数
          if (this.activeIndex == result.list.length - 3 && result.list.length >= 3) {
            console.log(this.activeIndex);
            mySwiper.allowSlideNext = false;//设置
          } else {
            mySwiper.allowSlideNext = true;//设置
          }

        },
      },
    })



  }
  _.contentSwiperInit = function (obj) {
    var mySwiper = new Swiper(obj, {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      scrollbar: {
        el: obj.querySelector(".swiper-scrollbar"),
      },
      mousewheel: true,
      mousewheelControl: true,    //鼠标滚轮
      roundLengths: true, //防止文字模糊
      observer: true,
      observeParents: true,
      nested: true
    });

  }
  //框架外的核心业务逻辑结束

  _.map = function (wrapped, callback) {
    //map实现
    // ... 

    callback && callback.call(_, wrapped);
  }
  //   _.prototype.map = _.map; // foolish

  _.each = function (obj, callback) {
    if (Array.isArray(obj)) {
      for (let [index, item] of obj.entries()) {
        callback && callback.call(_, item, index);
      }
    }
  };
  _.isFunction = function (obj) {
    return typeof obj == "function" || false;
  };
  _.functions = function (obj) {
    // return Object.keys(obj);
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  //obj == _ -> functions ["each","map","mixin"]
  //混入
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = (_[name] = obj[name]);
      //
      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return func.apply(_, args);
      };
    });
    return _;
  };

  _.mixin(_);

  if (typeof exports != "undefined" && !exports.nodeType) {
    if (typeof module != "undefined" && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
})();

