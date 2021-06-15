export const requestBody={
    "context": {
      "queryId": "1623738919541"
    },
    "limitSpec": {
      "columns": [
        {
          "dimension": "regcount",
          "dimensionOrder": {
            "type": "numeric"
          },
          "direction": "descending"
        }
      ],
      "limit": 100,
      "type": "default"
    },
    "aggregations": [
      {
        "expression": null,
        "fieldName": "单据总金额",
        "name": "单据总金额",
        "type": "doubleSum"
      },
      {
        "type": "thetaSketch",
        "name": "regcount",
        "fieldName": "registerNo",
        "isInputHyperUnique": false,
        "round": true
      }
    ],
    "dataSource": {
      "query": {
        "limitSpec": {
          "type": "NoopLimitSpec"
        },
        "queryType": "groupBy",
        "granularity": {
          "type": "all"
        },
        "dataSource": "charge_details",
        "filter": {
          "type": "and",
          "fields": [
            {
              "type": "and",
              "fields": [
                {
                  "type": "selector",
                  "dimension": "perType",
                  "value": "28"
                }
              ]
            },
            {
              "type": "regex",
              "dimension": "medProjectName",
              "pattern": "(氯化钠)|(哌拉西林他唑巴坦（哌拉西林三唑巴坦）)|(拉氧头孢)|(奥美拉唑)|(自费西药)|(前列地尔)|(头孢噻肟)|(参麦注射液)|(环磷腺苷)|(鼠神经生长因子)|(美罗培南)|(伏立康唑)|(亚胺培南西司他丁)|(消癌平注射液)|(桂哌齐特)|(布地奈德)|(头孢哌酮舒巴坦)|(阿莫西林克拉维酸)|(头孢唑肟)|(头孢替安)|(自费费用)|(康艾注射液)|(葡萄糖)|(人血白蛋白)|(长春西汀)|(氨溴索)|(舒血宁注射液（银杏叶注射液）)|(头孢米诺)|(头孢他啶)|(硫辛酸[(]α-硫辛酸[)])|(多索茶碱)|(脂肪乳氨基酸[(]18[)])|(头孢西丁)|(头孢地嗪)|(头孢呋辛)|(人纤维蛋白原)|(丹参川芎嗪)|(依达拉奉)|(埃索美拉唑（艾司奥美拉唑）)|(吡拉西坦（乙酰胺吡咯烷酮）)|(半胱氨酸)|(整蛋白型肠内营养剂)|(左氧氟沙星葡萄糖 左氧氟沙星氯化钠)|(替加环素)|(兰索拉唑)|(腺苷蛋氨酸)|(还原型谷胱甘肽)|(中/长链脂肪乳（C6-24）)|(脂肪乳氨基酸葡萄糖)|(替考拉宁)|(异甘草酸镁)|(泮托拉唑)|(左旋氨氯地平)|(银杏达莫注射液)|(丙氨酰谷氨酰胺)|(氟康唑)|(甲泼尼龙)|(复方甘草甜素（复方甘草酸苷）)|(艾迪注射液)|(阿奇霉素)|(矛头蝮蛇血凝酶[(]巴曲酶[)])|(阿洛西林)|(左卡尼汀)|(卡络磺钠[(]肾上腺色腙[)]      卡络磺钠氯化钠)|(注射用丹参多酚酸盐)|(吡拉西坦)|(氯吡格雷)|(低分子肝素)|(羟考酮)|(异丙托溴铵)|(门冬氨酸鸟氨酸[(]鸟氨酸天门冬氨酸[)])|(注射用脂溶性维生素（II）／注射用水溶性维生素组合包装)|(多烯磷脂酰胆碱)|(头孢美唑)|(天麻素)|(奥曲肽[8肽])|(参芪扶正注射液)|(纳美芬)|(阿托伐他汀)|(复方三维B（Ⅱ）)|(奥硝唑)|(左氧氟沙星葡萄糖   左氧氟沙星氯化钠)|(异帕米星)|(省、市离休干部可使用的治疗性西药)|(特布他林)|(溴己新)|(腹膜透析液)|(替米沙坦)|(甘露醇)|(氯化钾)|(布托啡诺)|(维生素C)|(奥氮平)|(厄贝沙坦氢氯噻嗪)|(米力农 米力农氯化钠 米力农葡萄糖)|(复方海蛇胶囊)|(甲钴胺)|(缬沙坦)|(磺苄西林)"
            }
          ]
        },
        "dimensions": [
          "registerNo",
          "单据总金额",
          "outHospDiagnosisName"
        ],
        "aggregations": [
          {
            "type": "count",
            "name": "count"
          }
        ],
        "intervals": {
          "intervals": [
            "2018-01-01T00:00:00.000/2018-12-31T23:59:59.000"
          ],
          "type": "intervals"
        }
      },
      "type": "query"
    },
    "dimensions": [
      "outHospDiagnosisName"
    ],
    "granularity": {
      "type": "all"
    },
    "queryType": "groupBy",
    "intervals": {
      "intervals": [
        "2018-01-01T00:00:00.000/2018-12-31T23:59:59.000"
      ],
      "type": "intervals"
    },
    "virtualColumns": [
      {
        "expression": "timestamp_format(\"__time\",'yyyy')",
        "name": "d0:v",
        "outputType": "STRING",
        "type": "expression"
      }
    ]
  };
export const requestResponse=[
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 512025.41999999597,
        "outHospDiagnosisName": "高血压病",
        "regcount": 3500.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 338506.28000000026,
        "outHospDiagnosisName": "支气管炎",
        "regcount": 2078.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 240624.9999999999,
        "outHospDiagnosisName": "上呼吸道疾病",
        "regcount": 2052.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 137979.75000000012,
        "outHospDiagnosisName": "急性上呼吸道感染",
        "regcount": 1223.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 110831.93000000002,
        "outHospDiagnosisName": "急性支气管炎",
        "regcount": 509.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 49139.75000000001,
        "outHospDiagnosisName": "疲劳综合征",
        "regcount": 422.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 112644.68000000015,
        "outHospDiagnosisName": "糖尿病",
        "regcount": 417.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 202403.27999999985,
        "outHospDiagnosisName": "支气管肺炎",
        "regcount": 365.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 49475.39,
        "outHospDiagnosisName": "胃炎",
        "regcount": 358.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 410726.0100000002,
        "outHospDiagnosisName": "肺炎",
        "regcount": 357.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 36114.04000000001,
        "outHospDiagnosisName": "咳嗽",
        "regcount": 269.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 25461.51000000002,
        "outHospDiagnosisName": "急性咽炎",
        "regcount": 262.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 63982.86999999999,
        "outHospDiagnosisName": "腹痛",
        "regcount": 238.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 28500.09999999998,
        "outHospDiagnosisName": "急性扁桃体炎",
        "regcount": 238.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 31074.309999999994,
        "outHospDiagnosisName": "胃肠炎",
        "regcount": 230.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 36395.970000000016,
        "outHospDiagnosisName": "发热",
        "regcount": 199.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 63857.38000000003,
        "outHospDiagnosisName": "头晕和眩晕",
        "regcount": 196.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 23474.239999999994,
        "outHospDiagnosisName": "心悸",
        "regcount": 186.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 41525.880000000005,
        "outHospDiagnosisName": "关节痛",
        "regcount": 181.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 37252.369999999995,
        "outHospDiagnosisName": "痛风",
        "regcount": 174.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 34663.140000000014,
        "outHospDiagnosisName": "胃溃疡",
        "regcount": 167.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 35339.25999999999,
        "outHospDiagnosisName": "腰痛",
        "regcount": 153.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 38694.990000000005,
        "outHospDiagnosisName": "冠心病",
        "regcount": 141.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 17370.739999999994,
        "outHospDiagnosisName": "呼吸道感染",
        "regcount": 137.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 59349.299999999996,
        "outHospDiagnosisName": "眩晕综合征",
        "regcount": 132.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 17822.609999999993,
        "outHospDiagnosisName": "皮炎",
        "regcount": 131.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 27533.879999999997,
        "outHospDiagnosisName": "慢性胃炎",
        "regcount": 127.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 79351.65999999997,
        "outHospDiagnosisName": "关节炎",
        "regcount": 119.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 16156.549999999996,
        "outHospDiagnosisName": "阴道炎",
        "regcount": 110.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 9424.360000000002,
        "outHospDiagnosisName": "消化不良",
        "regcount": 102.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 127689.53000000001,
        "outHospDiagnosisName": "肺部感染",
        "regcount": 101.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 22483.549999999996,
        "outHospDiagnosisName": "脑血管病",
        "regcount": 100.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 16330.869999999997,
        "outHospDiagnosisName": "上呼吸道感染",
        "regcount": 99.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 9494.010000000002,
        "outHospDiagnosisName": "软组织疾患",
        "regcount": 98.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 10221.410000000003,
        "outHospDiagnosisName": "急性化脓性扁桃体炎",
        "regcount": 89.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 6888.64,
        "outHospDiagnosisName": "高血压1级",
        "regcount": 85.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 7592.0700000000015,
        "outHospDiagnosisName": "疱疹性咽峡炎",
        "regcount": 79.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 10645.159999999994,
        "outHospDiagnosisName": "高脂血症",
        "regcount": 79.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 8591.100000000002,
        "outHospDiagnosisName": "咽炎",
        "regcount": 78.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 32303.329999999998,
        "outHospDiagnosisName": "膝关节病",
        "regcount": 78.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 12229.08,
        "outHospDiagnosisName": "哮喘性支气管炎",
        "regcount": 77.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 195401.55000000002,
        "outHospDiagnosisName": "冠状动脉粥样硬化性心脏病",
        "regcount": 76.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 13007.520000000004,
        "outHospDiagnosisName": "高血压2级",
        "regcount": 75.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 99846.86999999998,
        "outHospDiagnosisName": "骨折",
        "regcount": 71.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 351684.47,
        "outHospDiagnosisName": "肺恶性肿瘤",
        "regcount": 70.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 33897.210000000014,
        "outHospDiagnosisName": "腰椎间盘突出",
        "regcount": 68.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 58087.03000000001,
        "outHospDiagnosisName": "泌尿道感染",
        "regcount": 66.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 12531.969999999998,
        "outHospDiagnosisName": "龋齿",
        "regcount": 65.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 9130.110000000002,
        "outHospDiagnosisName": "高血压",
        "regcount": 65.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4134.299999999999,
        "outHospDiagnosisName": "营养不良",
        "regcount": 64.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 33044.4,
        "outHospDiagnosisName": "妊娠状态",
        "regcount": 64.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4665.710000000001,
        "outHospDiagnosisName": "牙周炎",
        "regcount": 63.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 5934.41,
        "outHospDiagnosisName": "过敏性皮炎(湿疹)",
        "regcount": 62.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 22794.269999999993,
        "outHospDiagnosisName": "支气管哮喘",
        "regcount": 61.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4437.039999999998,
        "outHospDiagnosisName": "急性牙周炎",
        "regcount": 60.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 16902.869999999995,
        "outHospDiagnosisName": "高血压3级",
        "regcount": 55.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 66728.71000000002,
        "outHospDiagnosisName": "心脏病",
        "regcount": 54.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 15801.37,
        "outHospDiagnosisName": "肾结石",
        "regcount": 54.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4512.599999999999,
        "outHospDiagnosisName": "结膜炎",
        "regcount": 54.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 38884.329999999994,
        "outHospDiagnosisName": "胆囊炎",
        "regcount": 53.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 6865.64,
        "outHospDiagnosisName": "扁桃体炎",
        "regcount": 52.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 3492.129999999999,
        "outHospDiagnosisName": "子宫颈炎",
        "regcount": 52.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 39438.14000000001,
        "outHospDiagnosisName": "缺血性脑血管病",
        "regcount": 50.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 10945.329999999998,
        "outHospDiagnosisName": "急性根尖牙周炎",
        "regcount": 50.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 35693.57,
        "outHospDiagnosisName": "带状疱疹",
        "regcount": 48.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 10212.660000000002,
        "outHospDiagnosisName": "睡眠障碍",
        "regcount": 48.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 215919.18,
        "outHospDiagnosisName": "白内障",
        "regcount": 47.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 71044.45,
        "outHospDiagnosisName": "慢性阻塞性肺病",
        "regcount": 45.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4523.78,
        "outHospDiagnosisName": "皮肤感染",
        "regcount": 44.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 13897.519999999999,
        "outHospDiagnosisName": "头痛",
        "regcount": 44.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 185543.63,
        "outHospDiagnosisName": "慢性阻塞性肺病伴急性加重",
        "regcount": 43.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 6556.770000000001,
        "outHospDiagnosisName": "胃肠功能紊乱",
        "regcount": 43.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 89464.90000000002,
        "outHospDiagnosisName": "2型糖尿病",
        "regcount": 42.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 42114.23999999999,
        "outHospDiagnosisName": "脊椎病",
        "regcount": 42.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 41945.319999999985,
        "outHospDiagnosisName": "慢性支气管炎",
        "regcount": 42.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 58633.98999999998,
        "outHospDiagnosisName": "脑梗塞",
        "regcount": 39.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 7024.009999999999,
        "outHospDiagnosisName": "便秘",
        "regcount": 39.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4628.36,
        "outHospDiagnosisName": "急性喉炎",
        "regcount": 38.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 14666.390000000001,
        "outHospDiagnosisName": "水肿",
        "regcount": 38.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 5476.949999999999,
        "outHospDiagnosisName": "肩周炎",
        "regcount": 38.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4390.12,
        "outHospDiagnosisName": "感冒",
        "regcount": 38.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 6213.740000000001,
        "outHospDiagnosisName": "慢性支气管炎急性发作",
        "regcount": 38.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 89109.06999999999,
        "outHospDiagnosisName": "抑郁症",
        "regcount": 37.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 8221.760000000002,
        "outHospDiagnosisName": "贫血",
        "regcount": 37.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 3306.1800000000007,
        "outHospDiagnosisName": "急性咽喉炎",
        "regcount": 37.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 3302.35,
        "outHospDiagnosisName": "中耳炎",
        "regcount": 36.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 5127.879999999999,
        "outHospDiagnosisName": "湿疹",
        "regcount": 36.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4866.419999999999,
        "outHospDiagnosisName": "尿道炎",
        "regcount": 35.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 3715.4799999999996,
        "outHospDiagnosisName": "手足口病",
        "regcount": 35.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 118820.82,
        "outHospDiagnosisName": "心力衰竭",
        "regcount": 34.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 17207.09,
        "outHospDiagnosisName": "胸痛",
        "regcount": 34.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 3057.3199999999993,
        "outHospDiagnosisName": "根尖牙周炎",
        "regcount": 34.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4693.64,
        "outHospDiagnosisName": "维生素Ｄ缺乏",
        "regcount": 34.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 43275.01,
        "outHospDiagnosisName": "输尿管结石",
        "regcount": 34.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 7787.189999999999,
        "outHospDiagnosisName": "月经不规则",
        "regcount": 34.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 4278.27,
        "outHospDiagnosisName": "牙髓炎",
        "regcount": 32.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 10268.359999999999,
        "outHospDiagnosisName": "耳鸣",
        "regcount": 32.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 2043.4199999999998,
        "outHospDiagnosisName": "牙痛",
        "regcount": 32.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 9451.110000000002,
        "outHospDiagnosisName": "乏力",
        "regcount": 32.0
      }
    },
    {
      "version": "v1",
      "timestamp": "2018-01-01T00:00:00.000Z",
      "event": {
        "单据总金额": 3907.7000000000003,
        "outHospDiagnosisName": "糖尿",
        "regcount": 31.0
      }
    }
  ]
export const dataSource=[{"num2011":18203,"num2012":19325,"name":"巴西"},{"num2011":23489,"num2012":23438,"name":"印尼"},{"num2011":29034,"num2012":31000,"name":"美国"},{"num2011":104970,"num2012":121594,"name":"印度"},{"num2011":131744,"num2012":134141,"name":"中国"},{"num2011":630230,"num2012":681807,"name":"世界人口(万)"}];

export const buildRankOption=(dataSource=[])=>{
    console.log(dataSource,'=101')
      return ({
        title: {
            text: '世界人口总量',
            subtext: '数据来自网络'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            data: dataSource.map(el=>el.name),
            axisLabel: {
              formatter(value, index) {
                const map = { 0: "a", 1: "b", 2: "c" };
                const textStyle = map[index] || "d";
                return `{${textStyle}|${index + 1}}`;
              },
              verticalAlign: "bottom",
              rich: {
                a: {
                  height: 20,
                  padding: [0, 8, 0, 8],
                  borderRadius: 10,
                  backgroundColor: "#2D6FC4",
                  color: "#fff"
                },
                b: {
                  height: 20,
                  padding: [0, 7, 0, 7],
                  borderRadius: 10,
                  backgroundColor: "#4291EB",
                  color: "#fff"
                },
                c: {
                  height: 20,
                  padding: [0, 7, 0, 7],
                  borderRadius: 10,
                  backgroundColor: "#6DB2F7",
                  color: "#fff"
                },
                d: {
                  width: 15,
                  height: 20,
                  padding: [0, 4, 0, 0],
                  borderRadius: 10,
                  backgroundColor: "#EBEBEB",
                  color: "#BBBDBF"
                }
              }
            },
        },
        ],
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: dataSource.map(el=>el.num2011),
                markPoint: {
                    symbol: "pin",
                    symbolSize: 1,
                    data: dataSource.map((d, index) => ({
                        value: d.name && d.name.length > 16 ? (d.name.slice(0, 16) + "...") : d.name,
                        coord: [0, index]
                    })),
                    label: {
                        show: true,
                        position: [0, -22],
                        color: "#232526",
                        fontSize: 14
                    }
                }
            },
            {
                name: '2012年',
                type: 'bar',
                data: dataSource.map(el=>el.num2012),
            }
        ]
    })
  }