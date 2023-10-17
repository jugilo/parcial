<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $albums = Album::all();
        return $albums;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $album = new Album();
        $album->name = $request->name;
        $album->place = $request->place;
        $album->sold_units = $request->sold_units;
        $album->duration = $request->duration;
        $album->id_band = $request->id_band;
        $album->save();
        return $album;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $album = Album::find($id);
        return $album;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $album = Album::find($id);
        $album->name = $request->name;
        $album->place = $request->place;
        $album->sold_units = $request->sold_units;
        $album->duration = $request->duration;
        $album->id_band = $request->id_band;
        $album->save();
        return $album;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $album = Album::find($id);
        $album->delete();
        return "Se elimino correctamente";
    }

    public function pdf(){
        $albums = Album::all();
        $pdf = PDF::loadView('pdf', compact('albums'));
        return $pdf->download('albums.pdf');
    }
}
