var krpano = null;
function krpano_onready_callback(krpano_interface){
  krpano = krpano_interface;
  // krpano.call("showlog()");
}

function actionName(action,...args){
  _[action](...args);
}

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
      sceneList:[
          {
              id: 1, 
              src:'panos/01_________.tiles/thumb.jpg',
              // name:'主入口',
              name:'垃圾分类回收及资源化利用',
              scene:'scene_01_________'
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
              src:'panos/07____________.tiles/thumb.jpg',
              // name:'娱乐广场',
              name:'碳汇林',
              scene:'scene_07____________'

          },
          {
              id: 5,
              src:'panos/08__________________.tiles/thumb.jpg',
              // name:'南侧入口广场',
              name:'低碳再生建材',
              scene:'scene_08__________________'

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
              src:'panos/1001_______________.tiles/thumb.jpg',
              // name:'低碳公共卫生间',
              name:'低碳公共卫生间',
              scene:'scene_1001_______________'

          },
          {
              id: 9,
              src:'panos/1002____________.tiles/thumb.jpg',
              // name:'太阳能板',
              name:'太阳能光伏发电系统',
              scene:'scene_1002____________'
          },
          {
              id: 10,
              src:'panos/1001_______________.tiles/thumb.jpg',
              // name:'配电系统',
              name:'“光储直柔”低碳电力新型配电系统',
              scene:'scene_1003____________'
          },{
              id:11,
              src:'panos/07____________.tiles/thumb.jpg',
              // name:'灌溉系统',
              name:'中水雨水绿化灌溉系统',
              scene:'scene_1004____________'
          },
      ],
      profile:[
        {
          id:'profile-1',
          name:'垃圾分类回收及资源化利用',
          list:[
            {
              content:`
              <h1>垃圾分类回收及资源化利用
                <p>Solar Photovoltaic Power Generation System</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能垃圾箱由太阳能供电，具备语音交互开门、自动称重、满溢监测报警、垃圾分类宣传引导等功能。可回收物由专业技术公司按照废纸、塑料、玻璃、金属、织物五类进行精细化分拣，运至相应利废厂家进行资源化再利用，实现碳减排目标。其他垃圾由市政环卫部门统一进行资源化处理。 <br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;The intelligent garbage bins are equipped with solar power supply, voice interactive door opening, automatic weighing, overflow monitoring & alarm, waste sorting guidance and other functions. Recyclables are sorted by one technology provider according to five categories of waste paper, plastic, glass, metal and fabric, and transported to corresponding waste manufacturers for resourceful reuse to achieve the goal of carbon emission reduction. Other wastes are handled by municipal sanitation departments for resourceful treatment.<br /><br />
              技术提供方：北京爱分类环境有限公司<br />
              Provider: Beijing Aifenlei Environment Co., Ltd.                       
              `
            },
            {
              content:`<br />
                <div class="img"><img src="./images/profile-1/pic1.png" /></div>
              `
            },{
              content:`
                <h1>
                  爱分类企业介绍、技术亮点及兑换方案
                </h1>
                <h2>
                  一、企业介绍及技术亮点
                </h2>
                <div class="img"><img src="./images/profile-1/pic2.png" /></div>
                </br>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京爱分类环境有限公司成立于2004年，总部位于中关村科技园，是一家专业从事环境信息化服务与互联网+垃圾分类整体运营解决方案的高新科技企业，构建了前端居民源头简单分类，中端物流高效清运，后端资源利用最大化的垃圾分类全品类全循环全产业链条的服务。 <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司以现代化互联网技术、智能化物流、车联网技术、AI人工智能分选以及互联网信息化大数据技术为支撑，在政府指导和各方参与的共同努力下，打造一个全民参与、全程看不见垃圾的隐形垃圾分类高速公路。<br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过公司的“爱分类”智慧垃圾分类系统平台，进驻党政机关、企事业单位、居民社区、商场、写字楼等，建立起完善的分类投放、分类收集、分类运输、分类处理的全流程体系，有效地将垃圾分类、垃圾运输与垃圾处理有机融合，打通线上线下行业生态圈，全面建立起一套完整的垃圾分类产业生态链，相应国家政策导向，用科技改善垃圾分类与处理现状，极大地减少垃圾填埋焚烧量，解决垃圾分类与减量利用的最后一公里的难题。 <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传统的回收行业一直以来都没有任何的数据可依，爱分类采用了大数据管理平台，借助地图定位、数据交互技术实现了垃圾量数据统计的可视化。清运的数量、消纳的重量，车辆的定点位都可以做到数据可知，让回收的垃圾可视化，透明化，为政府等相关单位提供决策依据，实现更科学、环保、高效的城市垃圾处理。 <br />
                爱分类基于居民、物业、社区、政府、企业，搭建共建共治共享智慧平台，
                </br>
                </br>
                <h3>
                  平台功能可实现的功能：
                </h3>
                √ 预约上门收集 </br>                    
                √ 智慧物流调度 </br>      
                √ 物流中转管控 </br>
                √ 数据信息上传 </br>
                √ 居民积分账户 </br>
                √ 网上商城购物 </br>
                √ 宣传教育科普 </br>
                √ 行业信息发布 </br>
                √ 环境随手拍 </br>
                √ 二手闲置发布 </br>
                </br>

                <h3>    
                  实现“两增两减”的价值
                </h3>
                居民参与率持续增加&nbsp;&nbsp;资源利用率持续增加 <br/>
                垃圾总量持续减少&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;政府投入持续减少
                </br>
                </br>
                <h3>
                  大数据精准监管
                </h3>

                <h3>
                  源头可溯、去向可查、风险可控、数据可知、便于监督
                </h3>
                <br />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱分类实现了精准到户的垃圾分类信息监管，搭建了生活垃圾的溯源系统，实现了生活垃圾从生产、清运到处置再利用的全过程数据链，可为政府精细化管理提供决策依据。
                </br>
                </br>
                <h2>
                  二、兑换方案
                </h2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;游客通过正确投递可回收物预约爱分类上门收集获得相应的环保金奖励，1元环保金=1元人民币，环保金有两种消费方式： </br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一种方式为线上消费，可在爱分类小程序中的环保金商城进行消费；</br>
                <div class="img"><img src="./images/profile-1/pic3.png" /></div>
                <div class="img"><img src="./images/profile-1/pic4.png" /></div>
                <div class="img" style="text-align:'center';">
                （线上：爱分类环保金商城）
                </div>

                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二种方式为线下消费，可在爱分类合作的便利店进行消费。</br>
                <div class="img"><img src="./images/profile-1/pic5.jpg" /></div>






              `
            },
            {
              content:`
                <h1>企业画册</h1>
                <div class="img"><img src="./images/profile-1/pic6.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic7.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic8.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic9.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic10.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic11.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic12.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic13.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic14.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic15.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic16.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic17.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic18.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic19.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic20.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic21.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic22.jpg" /></div>
              `
            },
            {
              content:`
                <h1>爱分类形象图片</h1>
                <div class="img"><img src="./images/profile-1/pic23.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic24.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic25.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic26.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic27.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic28.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic29.jpg" /></div>
                <div class="img"><img src="./images/profile-1/pic30.jpg" /></div>
              `
            },{
              content:`
                <h1>爱分类参与流程</h1>
                <div class="img">
                  <img src="./images/profile-1/video1.png" videoSrc="./images/profile-1/video1.mp4" />
                  <div class="icon-play"></div>
                </div>
              `
            },{
              content:`
                <h1>中央电视台采访</h1>
                <div class="img">
                  <img src="./images/profile-1/video2.png" videoSrc="./images/profile-1/video2.mp4" />
                  <div class="icon-play"></div>
                </div>
              `
            }
          ]
        },
        {
          id:'profile-2',
          name:'碳汇林',
          list:[
            {
              content:`
              <h1>碳汇林
                <p>Carbon Sink Forest</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公园绿化面积为5万多平方米，种植苗木2800余株。25年可产生的碳汇量为1236吨二氧化碳当量（CO2e），60年总碳汇量为2293吨二氧化碳当量（CO2e）。 <br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;The greening area of the park is over 50,000 square meters, and more than 2,800 seedlings were planted. the carbon sink that can be generated in 25 years is 1,236 tons of carbon dioxide equivalent (CO2e), and the total carbon sink in 60 years is 2,293 tons of carbon dioxide equivalent (CO2e).
              `
            },{
              content:`
              <h1>苗木照片</h1>
              <div class="img"><img src="./images/profile-2/pic1.jpg" /></div>          
              `
            }
          ]
        },
        {
          id:'profile-3',
          name:'中水雨水绿化灌溉系统',
          list:[
            {
              content:`
              <h1>中水雨水绿化灌溉系统
                <p>Reclaimed Water and Rainwater Greening & Irrigation System</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公园绿化灌溉用水全部来自中水和雨水，通过减少自来水（新水）消耗量，降低水资源利用的隐含碳排放量。中水系统从公园东侧的市政中水管网接入，雨水调蓄池位于公园北侧。<br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;All irrigation water comes from reclaimed water and rainwater. By reducing the amount of tap water (new water) consumption, the embedded carbon emission in water resource utilization is reduced. The reclaimed water system is accessed from the municipal reclaimed water pipe network on the east side of the park, and the rainwater storage tank is set on the north side of the park.
              `
            },{
              content:`
              <h1>技术详情</h1>
              公园内设雨水调蓄池，充分收集雨水并回用于绿化灌溉。公园中水系统与北京市政中水管网相连接，中水管道从公园东侧主入口附近接入，该中水来自北京良乡污水处理厂。      
              `
            }
          ]
        },
        {
          id:'profile-4',
          name:'低碳再生建材',
          list:[
            {
              content:`
              <h1>低碳再生建材
                <p>Low-carbon Recycled Building Materials</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再生建材以建筑垃圾等废弃物为原料制作而成，其性能符合施工安全及园林景观设计要求，碳排放量按照其替代的初生原料的碳排放的50%计算。公园道路按照再生水稳垫层、再生混凝土基层、再生砖面层设计铺装。<br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;Recycled building materials are made from construction waste and other waste materials. These materials can meet the requirements of construction safety and landscaping, while their carbon emissions are calculated at 50% of the carbon emissions of the original building materials they replace. Pavements in the park are designed and constructed according to recycled water-stable bedding layer, recycled concrete base layer and recycled brick surface layer.                      
              `
            },{
              content:`
              <h1>技术详情</h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公园使用的再生建材由再生骨料和其他胶凝材料组成，再生材料占比75~85%。再生骨料由建筑垃圾、废旧木材、废旧金属等废弃物破碎筛分处理制作而成，其他胶凝材料为水泥和粉煤灰。根据《建筑碳排放计算标准》（GB/T 51366-2019），以再生原料或低价值废料为原料生产的建材，其碳排放量为替代的初生原料的50%及以上。<br/><br />

              <h3>再生建材示意图</h3>
              <div class="img"><img src="./images/profile-4/pic5.jpg" /></div>
              <div class="img"><img src="./images/profile-4/pic6.jpg" /></div>
              <div class="img"><img src="./images/profile-4/pic7.jpg" /></div>
              <div class="img"><img src="./images/profile-4/pic8.jpg" /></div>
              
              `
            },{
              content:`
                <h1>低碳再生建材生产过程</h1>
                <div class="img">
                  <img src="./images/profile-4/video1.png" videoSrc="./images/profile-4/video1.mp4" />
                  <div class="icon-play"></div>
                </div>
              `
            }
          ]
        },
        {
          id:'profile-5',
          name:'“光储直柔”低碳电力新型配电系统',
          list:[
            {
              content:`
              <h1>“光储直柔”低碳电力新型配电系统
                <p>New type of zero carbon power distribution system PSDF</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“光储直柔”是一种基于直流的智慧能源管理系统，由功率配控单元（实现用电负载柔性调整）、光伏阵列、电动汽车充电桩（利用电动汽车动力电池组进行电能可控迁移）和直流用电设备组成。“光储直柔”能解决光伏发电功率与终端用电功率变化的不同步性问题，实现高效友好消纳。光储直柔智能配电系统与市政电网相连接，具备与电网双向互动能力。<br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;PSDF (Photovoltaic, Storage, DC, Flexible) is a DC-based intelligent energy management system, which consists of the power distribution units (PDU), PV arrays, EV charging piles and DC power equipment. It can solve the problem of unsynchronized power change of PV power generation and end-use power change, and realize efficient and friendly consumption. The system is connected to the municipal power grid and can interact with the grid in both directions.                      
              `
            },{
              content:`
              <h1>技术详情</h1>
              &nbsp;&nbsp;&nbsp;&nbsp;“光储直柔”是低碳发展领域的创新技术，“光”是指光伏发电，“储”是指利用系统内连接的一处或多处蓄电池组以及若干充电桩，实现充/放电功能；“直”是指实现直流供电，满足系统用电需求；“柔”是指这一系统对电网来说，不是供电量必须等于此时负载侧消耗电量的刚性负载，而是从电网的取电量可以根据电网的供需关系在较大范围内调节，从电网侧看，这一用电系统成为电网的柔性负载。 <br/><br />
              &nbsp;&nbsp;&nbsp;&nbsp;“光储直柔”技术使用户从单纯的能源消费者转为能源的生产者，储存者，和消费者三位一体，是深刻地影响能源生产、转换、消费各方面的革命，将导致能源相关活动的巨大变化。 <br/><br />

              <h3>光储直柔配电技术结构图</h3>
              <div class="img"><img src="./images/profile-5/pic1.png" /></div>
              
              <h3>光储直柔配电系统工作模式</h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;利用各种可统一调动的电动汽车，通过4种工作模式实现白天发电量和夜晚用电量的迁移： <br/>
              ① 光照充裕模式，光伏首先满足公园用电，其余部分可全部利用电动汽车存储；
              ② 夜间放电模式，通过电动汽车放电为公园照明供电； <br/>
              ③ 电网辅助模式，在连续阴天或电动汽车放电功率不足的极端情况下，晚间（电力低谷期）从二街村配电网补充少量功率； <br/>
              ④ 电网消纳模式，在电网谷电时段，还可通过配电网为电动汽车充电，支持供电公司消纳多余谷电。 <br/><br/>
              
              <h3>光储直柔配电系统示意图</h3>
              <div class="img"><img src="./images/profile-5/pic2.png" /></div>

              `
            }
          ]
        },
        {
          id:'profile-6',
          name:'低碳公共卫生间',
          list:[
            {
              content:`
              <h1>低碳公共卫生间
                <p>Low-carbon Public Restrooms</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;低碳公共卫生间采用污水可再生自循环利用系统、导光管采光技术、太阳能供热+空气源热泵技术、高效节水器具、木塑复合材料等多项技术和产品，从能源消耗、水资源利用、建材使用等多领域降低资源使用量，提高资源利用效率，最大限度地降低公共卫生间建设及运营期间碳排放量。 <br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;The public restrooms adopt a number of technologies and products such as renewable self-recycling system of sewage, light pipe lighting technology, solar heating + air source heat pump technology, high-efficiency water-saving devices, wood-plastic composites, etc., to reduce the use of resources and improve the efficiency of resource utilization in multiple fields such as energy consumption, water resources utilization and use of building materials, so as to minimize carbon emissions during the construction and operation of public restrooms.      
              `
            },{
              content:`
              <h1>具体技术及产品</h1>

              1. 中水自循环利用系统<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公厕以中水作为冲厕用水来源，冲厕产生污水将全封闭消毒处理，经处理达标后暂存。再生水一部分用于冲厕，一部分作为周边绿化，中水自循环系统的节水效率达95%，每日用水量从6m3降低为0.3m3，减少碳排放量约为0.4吨/年。污泥量很少，清理周期大约为8~12个月。
              <div class="img"><img src="./images/profile-6/pic2.png" /></div>
              <div class="img"><img src="./images/profile-6/pic3.png" /></div>

              2. 节水器具<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小便器、蹲便器、坐便器以及水龙头均采用高效节水和非接触式的器具，节水效率最高为70%。在节约用水的同时，防止交叉感染，助力疫情防控。
              <div class="img"><img src="./images/profile-6/pic4.png" /></div>
              <div class="img"><img src="./images/profile-6/pic5.png" /></div>
              <div class="img"><img src="./images/profile-6/pic6.png" /></div>
              <div class="img"><img src="./images/profile-6/pic7.png" /></div>

              3. 供热系统 <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;采用太阳能供热+空气热泵相结合的形式，优先利用太阳能给厕所供暖供热水。在热源不足的情况下，启动空气热泵进行辅助加热，保证室温不低于18℃。
              <div class="img"><img src="./images/profile-6/pic8.png" /></div>

              4. 建筑材料  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;建筑外墙面装饰材料由废旧家具制作而成。坡道、台阶、散水等利用再生混凝土、再生砖等材料安装制作，再生建材的碳排放量可忽略不计。
              <div class="img"><img src="./images/profile-6/pic9.png" /></div>

              5. 照明系统  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室内照明采用导光管采光系统，在白天的时候，利用自然光进行室内照明。在光照不足的时候，启用LED照明灯。每日节约用电量约40kWh，减少碳排放量8.8吨/年。
              <div class="img"><img src="./images/profile-6/pic10.png" /></div>

              6. 除臭系统 <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内置除菌除臭材料，同时集成LED灯和小功率空气流通扇，在除臭除菌的同时，具备照明和通风功能。与传统除臭装置相比，能耗最高可降低70%。
              <div class="img"><img src="./images/profile-6/pic11.png" /></div>

              技术提供方： <br/>
              义源（上海）节能环保科技有限公司 <br/>
              西尔拓新（北京）环保科技咨询有限公司  <br/>
              <div class="img"><img src="./images/profile-6/pic12.jpg" /></div>
              `
            },{
              content:`
              <h1>平面图</h1>
              <div class="img"><img src="./images/profile-6/pic1.png" /></div>
              `
            }
          ]
        },
        {
          id:'profile-7',
          name:'太阳能光伏发电系统',
          list:[
            {
              content:`
              <h1>太阳能光伏发电系统
                <p>Solar Photovoltaic Power Generation System</p>
              </h1>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;太阳能光伏发电系统总装机容量约为98kWp，预计年平均发电量为11.2万kWh，25年寿命期的碳减排量约为1685吨二氧化碳当量（CO2e）。光伏阵列按照“30·60”样式铺设。 <br /></br>
              &nbsp;&nbsp;&nbsp;&nbsp;The total installed capacity of the solar photovoltaic power generation system is 98kWp, the estimated annual average power generation capacity is 112,000kWh, and the carbon emission reduction of the system is about 1,685 tons of carbon dioxide equivalent (CO2e) during its service life of 25 years. The photovoltaic arrays are laid according to the "30-60" pattern.
              `
            },{
              content:`
              <h1>技术详情</h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;太阳能光伏发电系统由184块单晶硅太阳能电池组件构成，单个电池组件的最大功率为535Wp，处于行业先进水平。 <br/></br>
              <h3>光伏系统效果示意图</h3>
              <div class="img"><img src="./images/profile-7/pic1.jpg" /></div>
              `
            },{
              content:`
              <h1>企业宣传视频-中文版</h1>
              <div class="img">
                <img src="./images/profile-7/video1.png" videoSrc="./images/profile-7/Chinese.mp4" />
                <div class="icon-play"></div>
              </div>
              <br />
              <h1>企业宣传视频-英文版</h1>
              <div class="img">
                <img src="./images/profile-7/video1.png" videoSrc="./images/profile-7/English.mp4" />
                <div class="icon-play"></div>
              </div>
              `
            },{
              content:`
              <h1>企业宣传手册</h1>
              <div class="img"><img src="./images/profile-7/pdf1.jpg" pdfSrc="./images/profile-7/1.pdf" /></div>
              `
            },{
              content:`
              <h1>企业宣传手册</h1>
              <div class="img"><img src="./images/profile-7/pdf2.jpg" pdfSrc="./images/profile-7/2.pdf" /></div>
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
        }
      ]
  }

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
  _.getCurrentScene = (args)=>{
    if(Array.isArray(args)){
      //如果是数组 
      
    }else if(typeof args == 'object'){
      //如果是对象
			args.obj.call("loadscene('scene_park');");

    }else{
      if(args != 'scene_park'){
        document.getElementById('wrapper').style.zIndex = 1;
        document.getElementById('icon-back').style.zIndex = 1;
      }
    }

  }

  _.init = function (){

    _.initHome();
    _.initPrograss();
    _.initSwiper();
    _.initMusic();
    

  }

  // 修复krpano全屏其它js无效问题。》 使用浏览器自身的全屏 
  _.fullScreen = function(){
      var isFull=!!(document.webkitIsFullScreen || document.mozFullScreen || 
          document.msFullscreenElement || document.fullscreenElement
      );//!document.webkitIsFullScreen都为true。因此用!!
      if (isFull==false) {
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

    }else{

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

  _.initHome = function (){
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
      a.addEventListener('click',function(){
        _.loadFullScene();
      })
      button.appendChild(a);

      homepageWrapper.appendChild(logoWrapper);
      homepageWrapper.appendChild(button);

      document.body.appendChild(homepageWrapper);
  }

  _.initPrograss = function(){
    var loadingWrapper = document.createElement('div');
    loadingWrapper.id = 'loadingbar';
    loadingWrapper.className = 'loadingbar';

    var logoWrapper = document.createElement('div');
    logoWrapper.className = 'logo';
    logoWrapper.innerHTML = '即将进入昊天碳中和公园';

    var loadingBar = document.createElement('div');
    loadingBar.className = 'loadingbar_bg';

    var loadingBarFill = document.createElement('div');
    loadingBarFill.className = 'loadingbar_fill_style';

    var loadingbarLogo = document.createElement('div');
    loadingbarLogo.className = 'loadingbar_logo';

    var logo = document.createElement('img');
    logo.src = "./images/loadingbar_logo.png";
    loadingbarLogo.appendChild(logo);
    loadingBarFill.appendChild(loadingbarLogo);
    loadingBar.appendChild(loadingBarFill);

    loadingWrapper.appendChild(logoWrapper);
    loadingWrapper.appendChild(loadingBar);
     
    document.body.appendChild(loadingWrapper);
  }

  _.initSwiper = function(){
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.id = 'wrapper';

    var back = document.createElement('div');
    back.className = 'icon-back';
    back.id = 'icon-back';
    var backA = document.createElement('a');
    backA.addEventListener('click',function(){
      //返回到首页
      document.getElementById('wrapper').classList.remove('on');
      document.getElementById('wrapper').querySelectorAll('.swiper-slide').forEach((slide)=>{
        slide.classList.remove('on');
      })

      _.loadFullScene(true);
    });
    back.appendChild(backA);
    document.body.appendChild(back);

    var icon = document.createElement('div');
    icon.className = 'icon-swiper';
    var iconA = document.createElement('a');
    iconA.addEventListener('click',function(){
      _.toggleSwiper();
    });
    icon.appendChild(iconA);

    var swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container';

    var swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';

    data.sceneList.forEach(function(s){
      var slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.setAttribute('data-scene',s.scene);

      var img = document.createElement('img');
      img.src = s.src;
      var sceneName = document.createElement('div');
      sceneName.className = 'sceneName';
      sceneName.innerHTML = s.name;

      slide.appendChild(img);
      slide.appendChild(sceneName);
      
      swiperWrapper.appendChild(slide);
    })
    
    swiperContainer.addEventListener('click',function(){
      var target = event.target || event.srcElement;
      var targetScene = target.parentNode;
      if(target.parentNode.classList.value.split(" ").indexOf('swiper-slide') >= 0){
        document.getElementById('wrapper').querySelectorAll('.swiper-slide').forEach((slide)=>{
          slide.classList.remove('on');
        })
        targetScene.classList.add('on');
        krpano.call("loadscene('"+targetScene.getAttribute('data-scene')+"');");
      }
    })


    // swiperContainer.appendChild(icon);
    swiperContainer.appendChild(swiperWrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(swiperContainer);
    document.body.appendChild(wrapper);
    _.swiper();
  }
  
  _.initMusic = function(){
    var audio = document.createElement('audio');
    audio.setAttribute('id','audio');
    audio.setAttribute('autoplay','autoplay');
    audio.setAttribute('loop','loop');
    audio.innerHTML = '<source src="./audio.mp3" type="audio/mpeg" >'
    document.body.appendChild(audio);
    audio.load();
    audio.pause();

    var musicA = document.createElement('span');
    musicA.classList = 'icon-music';
    musicA.addEventListener('click',function(){
      var target =  event.target || event.srcElement;
      var cssList = target.classList.value.split(" ");
      if(cssList.indexOf('on') != -1){
        target.classList.remove('on');
        audio.pause();

      }else{
        target.classList.add('on');
        audio.play();
      }
    })
    document.body.appendChild(musicA);

  }

  _.swiper = function(){
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

  _.toggleSwiper = function (){
      var swiper = document.querySelector('.wrapper');
      if(swiper.classList.value.split(" ").indexOf('on') >= 0){
          document.querySelector('.wrapper').classList.remove('on');
      }else{
          document.querySelector('.wrapper').classList.add('on');
      }
  }
  _.setloading = function(prograss){
    if(document.querySelector('.loadingbar_fill_style')){
      document.querySelector('.loadingbar_fill_style').style.width = prograss*100 + '%';
    }
    if(prograss >= 1){
      document.getElementById('rotate').classList.add('on');
      setTimeout(() => {
        if(document.getElementById('loadingbar')){
          document.getElementById('loadingbar').remove();
        }
      }, 100);
      // document.getElementById('loadingbar').classList.remove('on');

    }
  }

  _.getQueryVariable = function(variable)
  {
         var query = window.location.search.substring(1);
         var vars = query.split("&");
         for (var i=0;i<vars.length;i++) {
                 var pair = vars[i].split("=");
                 if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }

  _.loadFullScene = function(flag){
    
      document.getElementById('wrapper').style.zIndex = -1;
      document.getElementById('icon-back').style.zIndex = -1;

      if(!flag){
        document.getElementById('homepage').remove();
        document.getElementById('loadingbar').classList.add('on');
        embedpano({swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"prefer", initvars:{design:"default"}, passQueryParameters:true,onready:krpano_onready_callback});

        window.addEventListener("orientationchange", function() {
          setTimeout(function() {
            krpano.set("fullscreen", false);
            setTimeout(function() {
              krpano.set("fullscreen", true);
            }, 200);
        }, 200);}, false);

        window.onresize = function(){
            _.fullScreen();
        }
        return;
      } 

      krpano.call("loadscene('scene_park');");


  }

  _.showModal = function(id){

    data.profile.forEach(p=>{
      if(p.id == id){
        _.initModalSwiper(p)
      }
    })

  }
  _.initModalSwiper = function(result){
    var profileWrapper = document.createElement('div');
    profileWrapper.className = 'profileWrapper';
    profileWrapper.id = 'profileWrapper';

    var title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = result.name;

    var icon = document.createElement('div');
    icon.className = 'icon-close';

    var iconA = document.createElement('a');
    iconA.addEventListener('click',function(){
      document.getElementById('profileWrapper').remove();
    });

    icon.appendChild(iconA);

    var swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container';

    var swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';

    result.list.forEach((res,index)=>{
      
      var swiperSlide = document.createElement('div');
      swiperSlide.className = 'swiper-slide';

      if(index == 0){
        var brand = document.createElement('div');
        brand.className = 'brand';
        var title = document.createElement('div');
        title.className = 'title';
        brand.appendChild(title);
        swiperSlide.appendChild(brand);
      }

      var swiperContent = document.createElement('div');
      swiperContent.className = 'swiper-content';
      swiperContent.addEventListener('click',function(){
        var target = event.target || event.srcElement;
        if(target.tagName.toLowerCase() == 'img' && !( target.getAttribute('videosrc')  || target.getAttribute('pdfSrc') )){
          //img
          var imgDiv  = document.createElement('div');
          imgDiv.classList = 'imgDiv';

          // var imgDivWrap  = document.createElement('div');
          // imgDivWrap.classList = 'imgDivWrap';

          var img = document.createElement('img');
          img.src = target.src;

          var iconClose = document.createElement('div');
          iconClose.className = 'icon-close';
      
          var iconCloseA = document.createElement('a');
          iconCloseA.addEventListener('click',function(){
            

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
        }else if(target.tagName.toLowerCase() == 'img' && target.getAttribute('videosrc')){
          //video
          var imgDiv  = document.createElement('div');
          imgDiv.classList = 'imgDiv';


          var video = document.createElement('video');
          video.src = target.getAttribute('videosrc');
          video.controls = 'controls';
          video.autoplay = 'autoplay';
          video.preload = 'true';
          video.setAttribute('x-webkit-airplay',true);
          video.setAttribute('webkit-playsinline',true);
          video.setAttribute('playsinline',true);
          video.setAttribute('x5-video-player-type',true);
          video['x-webkit-airplay'] = 'true';
          video['webkit-playsinline'] = 'true';
          video['playsinline'] = 'true';
          video['x5-video-player-type'] = 'h5';
          video.playsinline = 'true';

          var iconClose = document.createElement('div');
          iconClose.className = 'icon-close';
      
          var iconCloseB = document.createElement('a');
          iconCloseB.addEventListener('click',function(){

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

      var contentText = document.createElement('div');
      contentText.className = 'content';
      contentText.innerHTML = res.content;
      
      
      swiperContent.appendChild(contentText);

      swiperSlide.appendChild(swiperContent);

      swiperWrapper.appendChild(swiperSlide);

    })
    

    var swiperButtonPrev = document.createElement('div');
    swiperButtonPrev.className = 'swiper-button-prev';
    var swiperButtonNext = document.createElement('div');
    swiperButtonNext.className = 'swiper-button-next';
    

    swiperContainer.appendChild(swiperWrapper);


    profileWrapper.appendChild(title);
    profileWrapper.appendChild(icon);
    profileWrapper.appendChild(swiperContainer);
    profileWrapper.appendChild(swiperButtonPrev);
    profileWrapper.appendChild(swiperButtonNext);
    document.body.appendChild(profileWrapper);

    var mySwiper = new Swiper('.profileWrapper .swiper-container', {
        direction: 'horizontal', 
        loop: false, // 循环模式选项
        // slidesPerView: 9,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 26,
        
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
    })


  }
  //框架外的核心业务逻辑结束

  _.map = function (wrapped, callback) {
    //map实现
    // ... 

    callback && callback.call(_,wrapped);
  }
  //   _.prototype.map = _.map; // foolish

  _.each = function (obj, callback) {
    if (Array.isArray(obj)) {
      for (let [index,item] of obj.entries()) {
        callback && callback.call(_,item,index);
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
