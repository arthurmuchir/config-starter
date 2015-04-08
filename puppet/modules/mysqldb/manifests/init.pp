class mysqldb {
	class { '::mysql::server':
		root_password => '123',
		remove_default_accounts => true,
		override_options => {
			'mysqld' => {
				'bind-address' => '0.0.0.0'
			}
		}
	}

	mysql::db { 'vagrantdb':
		user => 'vagrantuser',
		password => '123',
		host => '%',
		grant => ['ALL'],
		charset => 'utf8'
	}
}
