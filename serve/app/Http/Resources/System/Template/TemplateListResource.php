<?php

namespace App\Http\Resources\System\Template;

use Illuminate\Http\Resources\Json\JsonResource;

class TemplateListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $file = $this['template_file'];
        $variants = TemplateVariantResource::collection($this['variants']);

        $price =collect($variants)->min('unit_price');
        return [
            "template_id"=>$this['id'],
            "template_name"=>$this['template_name'],
            "template_img"=>asset("{$file}img.jpg"),
            "template_content"=>$this['template_content'],
            "price"=>$price,
            "active"=>$this['active'],
            'variants'=>$variants
        ];
    }
}
