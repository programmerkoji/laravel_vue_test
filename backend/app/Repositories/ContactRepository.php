<?php

namespace App\Repositories;

use App\Models\Contact;
use App\Repositories\Interfaces\ContactRepositoryInterface;

class ContactRepository implements ContactRepositoryInterface
{
    public function all()
    {
        return Contact::all();
    }

    public function find(int $id)
    {
        return Contact::findOrFail($id);
    }

    public function create(array $data)
    {
        return Contact::create($data);
    }

    public function update(int $id, array $data)
    {
        $contact = Contact::findOrFail($id);
        $contact->update($data);
        return $contact;
    }

    public function delete(int $id)
    {
        $contact = Contact::findOrFail($id);
        return $contact->delete();
    }
}
