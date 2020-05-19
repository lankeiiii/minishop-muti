<?php

return[
    // HTTP 请求的超时时间（秒）
    'timeout'=>10.0,

    // 默认发送配置
    'default'=>[
        //网关调用策略，默认：顺序调用
        'strategy'=>\Overtrue\EasySms\Strategies\OrderStrategy::class,

        //默认可用的发送网关
        'gateways'=>[
            'yunpian'
        ],
    ],

    //可用的网关配置
    'gateways'=>[
        'errolog'=>[
            'file'=>'/tmp/easy-sms.log',
        ],
        'yunpian'=>[
            'api_key'=>'e32f5d966467710bdaeb1eb03ad86bb4'
        ]
    ]
];
